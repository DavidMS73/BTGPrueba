import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeticionesCreateComponent } from './peticiones-create/peticiones-create.component';
import { PeticionesListarComponent } from './peticiones-listar/peticiones-listar.component';

const routes: Routes = [
  {
    path: 'peticion',
    children: [
      { path: 'list', component: PeticionesListarComponent },
      {
        path: 'new',
        component: PeticionesCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeticionRoutingModule {}
