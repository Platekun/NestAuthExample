import { HttpException, HttpStatus } from '@nestjs/common';

export class BadJWTError extends HttpException {
  constructor() {
    super('Access token is malformed and therefore not valid.', HttpStatus.FORBIDDEN);
  }
}
