import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeticionRoutingModule } from './peticion-routing.module';
import { PeticionesListarComponent } from './peticiones-listar/peticiones-listar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PeticionesListarComponent],
  imports: [CommonModule, PeticionRoutingModule, HttpClientModule],
})
export class PeticionModule {}
