import bcrypt from 'bcrypt';

const verifyPassword = async (plainPassword , hashPassword) =>{
      try {
            const match = await bcrypt.compare(plainPassword , hashPassword);
            return match;
      } catch (error) {
            console.log('utils : verify Password :: ',error.message || error);
      }
}

export default verifyPassword;