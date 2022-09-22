import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachCarterTreinoParaAVidaPage } from './coach-carter-treino-para-a-vida.page';

const routes: Routes = [
  {
    path: '',
    component: CoachCarterTreinoParaAVidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachCarterTreinoParaAVidaPageRoutingModule {}
