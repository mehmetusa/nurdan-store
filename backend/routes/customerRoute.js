import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';

const router = express.Router();

router.get('/customerList', asyncHandler(async (req, res) => {
  const customers = await User.find();
  res.send(customers);

  }));


export default router;
