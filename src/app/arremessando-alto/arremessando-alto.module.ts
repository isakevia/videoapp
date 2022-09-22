import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArremessandoAltoPageRoutingModule } from './arremessando-alto-routing.module';

import { ArremessandoAltoPage } from './arremessando-alto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArremessandoAltoPageRoutingModule
  ],
  declarations: [ArremessandoAltoPage]
})
export class ArremessandoAltoPageModule {}
