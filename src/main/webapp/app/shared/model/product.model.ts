export interface IProduct {
  id?: number;
  name?: string;
  imageContentType?: string;
  image?: any;
}

export class Product implements IProduct {
  constructor(public id?: number, public name?: string, public imageContentType?: string, public image?: any) {}
}
