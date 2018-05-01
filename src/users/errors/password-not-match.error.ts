import { HttpException, HttpStatus } from '@nestjs/common';

export class PasswordDoesntMatchError extends HttpException {
  constructor() {
    super(
      'User account was found but credentials were not correct.',
      HttpStatus.FORBIDDEN,
    );
  }
}
