import { IUser } from 'app/core/user/user.model';

export interface ICustomer {
  id?: number;
  name?: string;
  user?: IUser;
}

export class Customer implements ICustomer {
  constructor(public id?: number, public name?: string, public user?: IUser) {}
}
