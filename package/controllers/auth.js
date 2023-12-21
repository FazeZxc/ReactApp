import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            userName,
            email,
            newPassword,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(newPassword, salt);

        const newUser = new User({
            firstName,
            lastName,
            userName,
            email,
            password : passwordHash,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}




export const login = async (req , res)=>{
    try{
        const { textValue , passwordValue } = req.body;
        console.log(textValue);
        const user = await User.findOne( { userName: textValue });
        if(!user) return res.status(400).json({ msg: "User does not exist. "});

        const isMatch = await bcrypt.compare(passwordValue , user.password);
        if(!isMatch) return res.status(400).json({ msg: "Invalid credentials. "});

        const token = jwt.sign({ id: user._id}, "ASHSH");
        delete user.password;
        res.status(200).json({ token , user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
