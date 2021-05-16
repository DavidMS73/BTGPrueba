import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReclamosCreateComponent } from './reclamos-create/reclamos-create.component';
import { ReclamosListarComponent } from './reclamos-listar/reclamos-listar.component';

const routes: Routes = [
  {
    path: 'reclamo',
    children: [
      { path: 'list', component: ReclamosListarComponent },
      {
        path: 'new',
        component: ReclamosCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclamoRoutingModule {}
