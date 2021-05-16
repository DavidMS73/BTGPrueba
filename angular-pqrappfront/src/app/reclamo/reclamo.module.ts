import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamoRoutingModule } from './reclamo-routing.module';
import { ReclamosListarComponent } from './reclamos-listar/reclamos-listar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ReclamosListarComponent],
  imports: [CommonModule, ReclamoRoutingModule, HttpClientModule],
})
export class ReclamoModule {}
