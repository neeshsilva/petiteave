import { ICustomer } from 'app/shared/model/customer.model';
import { IProduct } from 'app/shared/model/product.model';
import { Like } from 'app/shared/model/enumerations/like.model';

export interface IFeedback {
  id?: number;
  feedback?: any;
  like?: Like;
  customer?: ICustomer;
  product?: IProduct;
}

export class Feedback implements IFeedback {
  constructor(public id?: number, public feedback?: any, public like?: Like, public customer?: ICustomer, public product?: IProduct) {}
}
