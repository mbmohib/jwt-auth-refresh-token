import { Response, Request, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { jwtAccessTokenSecret } from '../config';

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authorization = req.headers['authorization'];

    if (!authorization) {
      throw 401;
    }

    const token = authorization.split(' ')[1];

    verifyToken(token, jwtAccessTokenSecret!);
    return next();
  } catch (error) {
    res.status(401).json({
      message: 'Unauthorized!',
    });
  }
};
