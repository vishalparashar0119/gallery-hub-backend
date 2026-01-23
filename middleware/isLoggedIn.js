import decodeJwtToken from "../utils/decodeJwtToken.js";
import UserModel from '../models/userModel.js'

export const isLoggedIn = async (req, res, next) => {
      if (!req.cookies.token) return res.status(401).json({ success: false, message: 'please loging to access' });
      try {
            const decode = decodeJwtToken(req.cookies.token);
            const user = await UserModel.findOne({ email: decode.email });

            if (!user) return res.status(401).json({ success: false, message: 'please loging to access' });

            req.user = { email: decode.email, userId: decode.userId }
            next();
      } catch (error) {
            console.log('middleware : is logged in :: ', error.message);
      }
}