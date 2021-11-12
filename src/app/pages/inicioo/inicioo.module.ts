import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciooPageRoutingModule } from './inicioo-routing.module';

import { IniciooPage } from './inicioo.page';
import { ComponenteUnoComponent } from 'src/app/components/componente-uno/componente-uno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciooPageRoutingModule
  ],
  declarations: [IniciooPage, ComponenteUnoComponent]
})
export class IniciooPageModule {}
