import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import path from 'path';
import uploadRoute from './routes/uploadRoute';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import customerRoute from './routes/customerRoute';
import orderRoute from './routes/orderRoute';
import config from './config';
const shortid = require("shortid");


const mongodbUrl = config.MONGODB_URL;
const port = process.env.PORT || 5000;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((err) => console.log(err.reason));

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(bodyParser.json());

app.use('/api/uploads', uploadRoute);
app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);
app.use('/api/customers', customerRoute);

app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});

app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));

app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.name && err.name === 'ValidationError' ? 400 : 500;
  res.status(status);
  res.send({ message: err.message });
});

app.use(fileUpload());
app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const { image } = req.files;
  const filename = `${new Date().getTime()}.jpg`;
  image.mv(`${uploads}/${filename}`, (err) => {
    if (err) return res.status(500).send(err);
    res.send(`/uploads/${filename}`);
  });
});

app.listen(port, () =>
  console.log("Server serves at http://localhost:" + port)
);
