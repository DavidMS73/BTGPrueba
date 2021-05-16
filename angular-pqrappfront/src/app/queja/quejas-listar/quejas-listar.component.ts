import { QuejaService } from './../queja.service';
import { Component, OnInit } from '@angular/core';
import { Queja } from '../queja';

@Component({
  selector: 'app-quejas-listar',
  templateUrl: './quejas-listar.component.html',
  styleUrls: ['./quejas-listar.component.css'],
})
export class QuejasListarComponent implements OnInit {
  constructor(private quejaService: QuejaService) {}

  quejas: Array<Queja>;

  getQuejas(): void {
    this.quejaService.getQuejas().subscribe((queja) => (this.quejas = queja));
  }

  dateFixed(fechaCreacion: Date): Date {
    return new Date(fechaCreacion);
  }

  ngOnInit(): void {
    this.getQuejas();
  }
}
