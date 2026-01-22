import decodeJwtToken from '../utils/decodeJwtToken.js';

export const isAdmin = async (req ,res , next) => {
      try {
            if (!req.cookies.token) return res.status(404).json({ success: false, message: "Unauthersise Access" });

            const decode = decodeJwtToken(req.cookies.token);
            req.admin = {
                  email: decode.email,
                  userId: decode.userId
            }

            next();
      } catch (error) {
            console.log('middleware : is admin :: ', error.message);
      }
}