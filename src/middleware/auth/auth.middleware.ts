import { Injectable, NestMiddleware, FunctionMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { NoJWTError, BadJWTError } from './errors';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  resolve(context: string): FunctionMiddleware {
    return (req: Request, res: Response, next: NextFunction) => {
      const authHeader = req.headers.authorization;

      if (authHeader) {
        const bearerIndex = authHeader.indexOf('Bearer');
        const token = authHeader.substring(bearerIndex + 7);

        try {
          verify(token, process.env.JWT_SECRET);
        } catch (e) {
          throw new BadJWTError();
        }

        next();
      } else {
        throw new NoJWTError();
      }
    };
  }
}
