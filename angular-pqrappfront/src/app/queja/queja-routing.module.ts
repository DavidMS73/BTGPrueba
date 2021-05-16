import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuejasCreateComponent } from './quejas-create/quejas-create.component';
import { QuejasListarComponent } from './quejas-listar/quejas-listar.component';

const routes: Routes = [
  {
    path: 'queja',
    children: [
      { path: 'list', component: QuejasListarComponent },
      {
        path: 'new',
        component: QuejasCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuejaRoutingModule {}
