import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'Error page!',
    },
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'Error page!',
      errorMessage: 'You are not authorized to access this page.',
    },
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'Error page!',
      errorMessage: 'The page does not exist.',
    },
  },
  {
    path: '400/customer',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'Error page!',
      errorMessage: 'Customer Does not exist.',
    }
  },
  {
    path: '400/product',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'Error page!',
      errorMessage: 'Product Does not exist.',
    }
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
