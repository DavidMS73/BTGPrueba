import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamoRoutingModule } from './reclamo-routing.module';
import { ReclamosListarComponent } from './reclamos-listar/reclamos-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReclamosCreateComponent } from './reclamos-create/reclamos-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [ReclamosListarComponent, ReclamosCreateComponent],
  imports: [
    CommonModule,
    ReclamoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
})
export class ReclamoModule {}
