import User from "../model/User";

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    }catch(err) {
        console.log(err)
    }
    if(!user) {
        return res.status(404).json({message: "No users found" });
    }
    return res.status(200).json({users});
}