const setCookies = (res, token, tokenName) => {
      res.cookie(tokenName, token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'
      });
}

export default setCookies;