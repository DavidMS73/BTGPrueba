import { Component, OnInit } from '@angular/core';
import { ReclamoPeticionResult, ReclamoQuejaResult } from '../reclamo';
import { ReclamoService } from '../reclamo.service';

@Component({
  selector: 'app-reclamos-listar',
  templateUrl: './reclamos-listar.component.html',
  styleUrls: ['./reclamos-listar.component.css'],
})
export class ReclamosListarComponent implements OnInit {
  constructor(private reclamoService: ReclamoService) {}

  reclamosConPeticiones: Array<ReclamoPeticionResult>;
  reclamosConQuejas: Array<ReclamoQuejaResult>;

  getReclamosConPeticiones(): void {
    this.reclamoService.getReclamosConPeticiones().subscribe((peticion) => {
      this.reclamosConPeticiones = peticion;
      this.reclamosConPeticiones = this.reclamosConPeticiones.filter(
        (reclamo) => reclamo.peticionesQuejas.length > 0
      );
    });
  }

  getReclamosConQuejas(): void {
    this.reclamoService.getReclamosConQuejas().subscribe((queja) => {
      this.reclamosConQuejas = queja;
      this.reclamosConQuejas = this.reclamosConQuejas.filter(
        (reclamo) => reclamo.peticionesQuejas.length > 0
      );
    });
  }

  dateFixed(fechaCreacion: Date): Date {
    return new Date(fechaCreacion);
  }

  ngOnInit(): void {
    this.getReclamosConPeticiones();
    this.getReclamosConQuejas();
  }
}
