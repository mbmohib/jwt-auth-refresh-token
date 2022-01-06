import jwt from 'jsonwebtoken';
import { jwtRefreshTokenSecret, jwtAccessTokenSecret } from '../config';

interface TokenPayload {
  data: { email: string };
  iat: number;
  exp: number;
}

export const generateRefreshToken = (
  data = {},
  expiresIn: string | number = '1d',
) => {
  const token = jwt.sign({ data }, jwtRefreshTokenSecret!, {
    expiresIn,
  });

  return {
    token,
    expiresIn,
  };
};

export const generateAccessToken = (
  data = {},
  expiresIn: string | number = '15m',
) => {
  const token = jwt.sign({ data }, jwtAccessTokenSecret!, {
    expiresIn,
  });

  return {
    token,
  };
};

export const verifyToken = (
  token: string,
  secret: string,
): TokenPayload | void => {
  try {
    return jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        throw 401;
      }
      return decoded;
    });
  } catch (err) {
    throw 401;
  }
};
