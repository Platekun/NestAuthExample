import { ChangeAccountStatusDTO } from '../dtos/change-account-status.dto';
import { AccountStates } from '../account-states';

export interface ChangeStatusRequest extends ChangeAccountStatusDTO {
  readonly id: string;
  readonly state: AccountStates;
}
