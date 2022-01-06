import { RequestHandler, Response, Request } from 'express';
import {
  generateRefreshToken,
  generateAccessToken,
  verifyToken,
} from '../utils/jwt';
import { jwtRefreshTokenSecret, refreshTokenMaxAge } from '../config';

export const login: RequestHandler = async (req: Request, res: Response) => {
  // verify email and password
  // get user info from db
  const user = { email: 'me@example.com' };

  const { token: refreshToken } = generateRefreshToken(user);
  const { token } = generateAccessToken(user);

  res.cookie('rt', refreshToken, {
    httpOnly: true,
    maxAge: refreshTokenMaxAge,
  });

  res.status(200).json({
    data: {
      user,
      token,
    },
    message: 'Logging successful',
  });
};

export const refreshToken: RequestHandler = async (
  req: Request,
  res: Response,
) => {
  try {
    const refreshToken = req.cookies.rt;

    if (!refreshToken) {
      throw 401;
    }

    const payload = verifyToken(refreshToken, jwtRefreshTokenSecret!);

    const user = payload?.data;
    const { token: newRefreshToken } = generateRefreshToken(user);
    const { token } = generateAccessToken(user);

    res.cookie('rt', newRefreshToken, {
      httpOnly: true,
      maxAge: refreshTokenMaxAge,
    });

    res.status(200).json({
      data: {
        user,
        token,
      },
      message: 'Token fetched successfully',
    });
  } catch (err) {
    res.status(err as number).json({
      message: 'Failed',
    });
  }
};

export const logout: RequestHandler = async (req: Request, res: Response) => {
  res.cookie('rt', '', {
    httpOnly: true,
    maxAge: 0,
  });

  res.status(200).json({
    data: {},
    message: 'Logout successfully',
  });
};

export const checkProtected: RequestHandler = async (
  req: Request,
  res: Response,
) => {
  try {
    res.status(200).json({
      data: {
        protected: 'I am protected info!!',
      },
      message: 'You have accessed protected info successfully',
    });
  } catch (err) {
    res.status(err as number).json({
      message: 'Failed',
    });
  }
};
