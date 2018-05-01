import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailIsTakenError extends HttpException {
  constructor() {
    super(
      'The email provided is already associated with an existing account.',
      HttpStatus.CONFLICT,
    );
  }
}
