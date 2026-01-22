import jwt from 'jsonwebtoken';

const decodeJwtToken = (token) => {
      const jwtSecreat = process.env.JWT_SECRET;
      const verify = jwt.verify(token, jwtSecreat);
      return verify;
}

export default decodeJwtToken;