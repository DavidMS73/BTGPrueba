import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeticionesListarComponent } from './peticion/peticiones-listar/peticiones-listar.component';

const routes: Routes = [{ path: '', component: PeticionesListarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
