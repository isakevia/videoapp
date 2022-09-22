import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachCarterTreinoParaAVidaPageRoutingModule } from './coach-carter-treino-para-a-vida-routing.module';

import { CoachCarterTreinoParaAVidaPage } from './coach-carter-treino-para-a-vida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachCarterTreinoParaAVidaPageRoutingModule
  ],
  declarations: [CoachCarterTreinoParaAVidaPage]
})
export class CoachCarterTreinoParaAVidaPageModule {}
