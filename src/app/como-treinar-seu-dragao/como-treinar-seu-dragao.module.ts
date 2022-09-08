import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoTreinarSeuDragaoPageRoutingModule } from './como-treinar-seu-dragao-routing.module';

import { ComoTreinarSeuDragaoPage } from './como-treinar-seu-dragao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoTreinarSeuDragaoPageRoutingModule
  ],
  declarations: [ComoTreinarSeuDragaoPage]
})
export class ComoTreinarSeuDragaoPageModule {}
