import { HttpException, HttpStatus } from '@nestjs/common';

export class AccountWasDeletedError extends HttpException {
  constructor() {
    super(
      'The account was previously deleted. If you wish to log in you will need to create a new account.',
      HttpStatus.GONE,
    );
  }
}
