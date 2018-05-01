import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AccountStates } from './account-states';
import { ChangeAccountStatusDTO } from './dtos';
import { ChangeStatusRequest } from './interfaces';
import { encrypt, matchPassword } from './password.helper';
import { SignupDTO, LoginDTO } from 'auth';
import { User } from './entities';
import { UserNotFoundError, PasswordDoesntMatchError, EmailIsTakenError, CannotChangeToSameStateError } from './errors';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(signupDTO: SignupDTO): Promise<User> {
    const existingUser = await this._findByAttr('email', signupDTO.email);

    if (existingUser) {
      throw new EmailIsTakenError();
    } else {
      const user = this.userRepository.create();
      user.email = signupDTO.email;
      user.name = signupDTO.name;
      user.password = await encrypt(signupDTO.password);

      await this.userRepository.save(user);
      return user;
    }
  }

  public async findByEmailAndPassword(loginDTO: LoginDTO): Promise<User> {
    const user = await this._findByAttr('email', loginDTO.email);

    if (!user) {
      throw new UserNotFoundError();
    } else {
      await this._verifyUserPassword(user.password, loginDTO.password);
      return user;
    }
  }

  public async changeStatusAccount(changeStatusRequest: ChangeStatusRequest) {
    const user = await this._findByAttr('id', changeStatusRequest.id);

    if (!user) {
      throw new UserNotFoundError();
    } else {
      await this._verifyUserPassword(
        user.password,
        changeStatusRequest.password,
      );

      if (user.accountState === changeStatusRequest.state) {
        throw new CannotChangeToSameStateError();
      } else {
        user.accountState = changeStatusRequest.state;
        this.userRepository.save(user);
      }
    }
  }

  private async _findByAttr(attr: string, value: any) {
    return await this.userRepository.findOne({ [attr]: value });
  }

  private async _verifyUserPassword(password: string, inputPassword: string) {
    const passwordDoesMatch = await matchPassword(password, inputPassword);

    if (!passwordDoesMatch) {
      throw new PasswordDoesntMatchError();
    }
  }
}
