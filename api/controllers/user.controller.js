import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);

    if (req.userId !== user._id.toString()) {
        return res.status(403).send("You are not authorized, you can only delete your account");
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully");
    // await User.findByIdAndDelete(req.params.id);

}

