import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComoTreinarSeuDragaoPage } from './como-treinar-seu-dragao.page';

const routes: Routes = [
  {
    path: '',
    component: ComoTreinarSeuDragaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComoTreinarSeuDragaoPageRoutingModule {}
