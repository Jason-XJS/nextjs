import {connectDB} from "@/db/config";
import jwt from "jsonwebtoken";
import {UserModel} from "@/services/models/users.schem";


export default async function handler(req, res) {
    try {
        await connectDB();
        const authorization = req.headers.authorization;
        const token = authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({
                error: 'User must login'
            });
        }
        try {
            const jwtData = jwt.verify(token, process.env.JWT_SECRET);

            const user = await UserModel.findById(jwtData.userId);
            res.status(200).json(user);
        } catch (err) {
            console.log(err);
            return res.status(401).json({
                error: 'Token expired'
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}