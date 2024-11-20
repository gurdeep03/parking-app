const User = require('../models/userModels');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');	
require('dotenv').config();
const jwt = require('jsonwebtoken');

const SignUp = asyncHandler(async (req, res) => {
    const { username, email, phoneNumber, password } = req.body;

    if (!username || !email || !phoneNumber || !password) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        username,
        email,
        phoneNumber,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

const LoginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Please provide email and password");
    }
    
    const user = await User.findOne({ email });
    
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.PRIVATE_KEY,
            { expiresIn: "1h" }
        );

        res.json({
            token,
            user: {
            id: user._id,
            username: user.username,
            email: user.email,
            },
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

module.exports = { SignUp , LoginUser };