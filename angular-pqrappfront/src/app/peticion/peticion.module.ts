import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeticionRoutingModule } from './peticion-routing.module';
import { PeticionesListarComponent } from './peticiones-listar/peticiones-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { PeticionesCreateComponent } from './peticiones-create/peticiones-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PeticionesListarComponent, PeticionesCreateComponent],
  imports: [
    CommonModule,
    PeticionRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class PeticionModule {}
