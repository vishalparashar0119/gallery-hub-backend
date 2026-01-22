import jwt from 'jsonwebtoken';

const genrateJwtToken = (email, userId) => {
      try {
            const jwtSecreat = process.env.JWT_SECRET;
            const token = jwt.sign({ email: email, userId: userId }, jwtSecreat);
            return token;
      } catch (error) {
            console.log('utils : genrate jwt token :: ', error.message);
      }
}

export default genrateJwtToken