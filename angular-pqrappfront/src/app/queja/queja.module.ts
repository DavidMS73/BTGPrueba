import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuejaRoutingModule } from './queja-routing.module';
import { QuejasListarComponent } from './quejas-listar/quejas-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { QuejasCreateComponent } from './quejas-create/quejas-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuejasListarComponent, QuejasCreateComponent],
  imports: [
    CommonModule,
    QuejaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class QuejaModule {}
