import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeticionModule } from './peticion/peticion.module';
import { QuejaModule } from './queja/queja.module';
import { ReclamoModule } from './reclamo/reclamo.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PeticionModule,
    QuejaModule,
    ReclamoModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
