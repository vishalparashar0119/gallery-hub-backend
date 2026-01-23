import admin from "../configs/firebaseConfig.js";
import AdminModel from "../models/adminModel.js"
import UserModel from "../models/userModel.js";
import genrateJwtToken from "../utils/genrateJwtToken.js";
import setCookies from "../utils/setCookies.js";
import verifyPassword from "../utils/verifyPassword.js";

export const adminLogin = async (req, res) => {
      try {
            const { email, password } = req.body;
            const admin = await AdminModel.findOne({ email });

            if (!admin) return res.status(404).json({ success: false, message: "Email or password is incorrect" });

            const match = await verifyPassword(password, admin.password);

            if (!match) return res.status(404).json({ success: false, message: "Email or password is incorrect" });

            const token = genrateJwtToken(admin.email, admin._id);

            setCookies(res, token, 'token');

            return res.status(200).json({ success: true, isAdmin: true, message: 'login successfull' });

      } catch (error) {
            console.log('auth controller : admin Login :: ', error.message);
            return res.status(500).json({ success: false, message: 'opps somthing went wrong' });
      }
}

export const loginAndSignupUser = async (req, res) => {
      try {
            const { idToken } = req.body;
            const decodeToken = await admin.auth().verifyIdToken(idToken);

            const { name, email, picture, uid } = decodeToken;

            let user = await UserModel.findOne({ email: email });

            if (!user) {
                  user = await UserModel.create({
                        name,
                        email,
                        avatar: picture,
                        firebaseUid: uid,
                        provider: 'google.com',
                  })
            }

            const token = genrateJwtToken(email, uid);

            setCookies(res, token, 'token');

            return res.status(200).json({ success: true, isAdmin: false, message: 'User login successfully' });
      } catch (error) {
            console.log('auth controller : login and signup user :: ', error.message);
            return res.status(500).json({ success: false, message: 'opps somthing went wrong' });
      }
}