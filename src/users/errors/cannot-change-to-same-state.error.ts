import { HttpException, HttpStatus } from '@nestjs/common';

export class CannotChangeToSameStateError extends HttpException {
  constructor() {
    super(
      'The account you are trying to modify already has such state.',
      HttpStatus.CONFLICT,
    );
  }
}
