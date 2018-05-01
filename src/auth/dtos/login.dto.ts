import { IsString } from 'class-validator';

export class LoginDTO {
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}
