import express from 'express';
import User from '../models/User';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';


const router = express.Router();

const genToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, { expiresIn: '60d' });
};

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: genToken(user._id),
    });
} else {
    res.status(401);
    throw new Error('Invalid email or password.');
}
});