import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteDosComponent } from 'src/app/components/componente-dos/componente-dos.component';
import { ComponenteUnoComponent } from 'src/app/components/componente-uno/componente-uno.component';

import { IniciooPage } from './inicioo.page';

const routes: Routes = [
  {
    path: '',
    component: IniciooPage,
    //declarar las rutas hijas que se cargarán en la page "inicio"
    children:[
      {
        path:'uno',
        component: ComponenteUnoComponent
      },
      {
        path:'dos',
        component: ComponenteDosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciooPageRoutingModule {}
