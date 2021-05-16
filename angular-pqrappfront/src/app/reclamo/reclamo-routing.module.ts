import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReclamosListarComponent } from './reclamos-listar/reclamos-listar.component';

const routes: Routes = [
  {
    path: 'reclamo',
    children: [{ path: 'list', component: ReclamosListarComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclamoRoutingModule {}
