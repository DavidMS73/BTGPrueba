import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuejasListarComponent } from './quejas-listar/quejas-listar.component';

const routes: Routes = [
  {
    path: 'queja',
    children: [{ path: 'list', component: QuejasListarComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuejaRoutingModule {}
