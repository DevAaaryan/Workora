import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        const newUser = new User({
            ...req.body,
            password: hash,

        })

        await newUser.save();
        res.status(201).send("User created successfully")
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })

        if (!user) return next(createError(404, "User not found"));

        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        if (!isCorrect) return next(createError(400, "Wrong password"));

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,

        }, process.env.JWT_KEY)
        const { password, ...other } = user._doc
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).send(other)
    } catch (error) {
        next(error);
    }

}

export const logout = async (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
    }).status(200).send("User logged out successfully");
}