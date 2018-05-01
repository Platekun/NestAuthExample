import { IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  readonly password: string;

  @IsString()
  readonly name: string;
}
