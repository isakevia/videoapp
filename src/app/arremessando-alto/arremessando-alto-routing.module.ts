import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArremessandoAltoPage } from './arremessando-alto.page';

const routes: Routes = [
  {
    path: '',
    component: ArremessandoAltoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArremessandoAltoPageRoutingModule {}
