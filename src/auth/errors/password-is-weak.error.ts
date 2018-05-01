import { HttpException, HttpStatus } from '@nestjs/common';

export class PasswordIsWeakError extends HttpException {
  constructor(reasons: string[]) {
    super(
      {
        error: 'Password is not strong enough',
        reasons,
      },
      HttpStatus.EXPECTATION_FAILED,
    );
  }
}
