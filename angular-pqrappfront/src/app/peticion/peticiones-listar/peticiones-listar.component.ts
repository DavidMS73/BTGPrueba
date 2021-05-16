import { Component, OnInit } from '@angular/core';
import { Peticion } from '../peticion';
import { PeticionService } from '../peticion.service';

@Component({
  selector: 'app-peticiones-listar',
  templateUrl: './peticiones-listar.component.html',
  styleUrls: ['./peticiones-listar.component.css'],
})
export class PeticionesListarComponent implements OnInit {
  constructor(private peticionService: PeticionService) {}

  peticiones: Array<Peticion>;

  getPeticiones(): void {
    this.peticionService
      .getPeticiones()
      .subscribe((pet) => (this.peticiones = pet));
  }

  dateFixed(fechaCreacion: Date): Date {
    return new Date(fechaCreacion);
  }

  ngOnInit(): void {
    this.getPeticiones();
  }
}
