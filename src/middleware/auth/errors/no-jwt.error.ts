import { HttpException, HttpStatus } from '@nestjs/common';

export class NoJWTError extends HttpException {
  constructor() {
    super('Could not completed such operation. Access token was not found', HttpStatus.FORBIDDEN);
  }
}
