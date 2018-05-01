import { Controller, HttpCode, Put, Body, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';

import { AccountStates } from './account-states';
import { ChangeAccountStatusDTO } from './dtos';
import { UsersService } from './users.service';

@Controller('users')
@UsePipes(new ValidationPipe())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(204)
  @Put(':id/account-deactivation')
  async onAccountDeactivation(
    @Param('id') id: string,
    @Body() changeAccountStatusDTO: ChangeAccountStatusDTO,
  ) {
    await this.usersService.changeStatusAccount({
      id,
      ...changeAccountStatusDTO,
      state: AccountStates.INACTIVE,
    });
  }

  @HttpCode(204)
  @Delete(':id/account-deletion')
  async onAccountDeletion(
    @Param('id') id: string,
    @Body() changeAccountStatusDTO: ChangeAccountStatusDTO,
  ) {
    await this.usersService.changeStatusAccount({
      id,
      ...changeAccountStatusDTO,
      state: AccountStates.DELETED,
    });
  }
}
