import mongoose from 'mongoose';


const customerSchema = new mongoose.Schema(
    {
      customer: { type: String, required: true },
      email: { type: String },
      phone: { type: Number, required: true, min: 0 },
      orderAmount: { type: Number, required: true, min: 0 },
      numReviews: { type: Number, required: true, default: 0 },
    },
    { timestamps: true }
  );
  
  const Customers= mongoose.model('User', customerSchema);
  
  export default Customers;