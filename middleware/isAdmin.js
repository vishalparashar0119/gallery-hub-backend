import decodeJwtToken from '../utils/decodeJwtToken.js';
import AdminModel from '../models/adminModel.js'

export const isAdmin = async (req, res, next) => {
      if (!req.cookies.token) return res.status(404).json({ success: false, message: "please login to  access" });

      try {
            const decode = decodeJwtToken(req.cookies.token);

            const admin = await AdminModel.findOne({ email: decode.email });

            if (!admin) return res.status(404).json({ success: false, message: "please login to  access" });

            req.admin = {
                  email: decode.email,
                  userId: decode.userId
            }
            next();
      } catch (error) {
            console.log('middleware : is admin :: ', error.message);
      }
}