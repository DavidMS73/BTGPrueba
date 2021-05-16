import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuejaRoutingModule } from './queja-routing.module';
import { QuejasListarComponent } from './quejas-listar/quejas-listar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [QuejasListarComponent],
  imports: [CommonModule, QuejaRoutingModule, HttpClientModule],
})
export class QuejaModule {}
