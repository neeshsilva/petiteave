import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.PetiteaveCustomerModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.PetiteaveProductModule),
      },
      {
        path: 'feedback',
        loadChildren: () => import('./feedback/feedback.module').then(m => m.PetiteaveFeedbackModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class PetiteaveEntityModule {}
