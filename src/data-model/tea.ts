import TeaForms from './tea-forms';

export default class Tea {
  name: string = '';
  form: TeaForms = TeaForms.LOOSE;
  wouldBuyAgain: boolean = false;
  price: number  = 0.0;
  pickingSeason: string = '';
  origin: string = '';
  vendor: string = '';
  urlBought: string = '';
  vendorDescription: string = '';
  description: string = '';
}
