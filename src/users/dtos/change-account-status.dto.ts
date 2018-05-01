import { IsString } from 'class-validator';

export class ChangeAccountStatusDTO {
  @IsString()
  readonly reason: string;

  @IsString()
  readonly password: string;
}
