import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Peticion } from 'src/app/peticion/peticion';
import { Queja } from 'src/app/queja/queja';
import { Reclamo } from '../reclamo';
import { ReclamoService } from '../reclamo.service';

@Component({
  selector: 'app-reclamos-create',
  templateUrl: './reclamos-create.component.html',
  styleUrls: ['./reclamos-create.component.css'],
})
export class ReclamosCreateComponent implements OnInit {
  reclamoForm: FormGroup;

  todasPeticionesDisponibles: Peticion[];
  todasQuejasDisponibles: Queja[];
  selectedOption: number;
  quejaPeticionId: number;

  constructor(
    private reclamoService: ReclamoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.reclamoForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      detalle: ['', [Validators.required, Validators.minLength(10)]],
      idPeticion: [null],
      idQueja: [null],
    });
  }

  cancelCreation(): void {
    this.router.navigate(['/reclamo/list']);
    this.reclamoForm.reset();
  }

  createReclamo(reclamoC: Reclamo): void {
    this.selectedOption === 0
      ? (reclamoC.idQueja = null)
      : (reclamoC.idPeticion = null);
    console.log(reclamoC);
    this.reclamoService.createReclamo(reclamoC).subscribe(
      (peticion) => {
        this.toastr.success('El reclamo fue creado correctamente');
        this.router.navigate(['/reclamo/list']);
        this.reclamoForm.reset();
      },
      (err) => {
        this.toastr.error('Revisa si elegiste una petición o queja', 'Error');
        console.error(err, 'Error');
      }
    );
  }

  getPeticionesDisponibles(): void {
    this.reclamoService
      .getPeticionesDisponiblesReclamo()
      .subscribe((peticiones) => {
        this.todasPeticionesDisponibles = peticiones;
      });
  }

  getQuejasDisponibles(): void {
    this.reclamoService.getQuejasDisponiblesReclamo().subscribe((quejas) => {
      this.todasQuejasDisponibles = quejas;
    });
  }

  onClickQuejaReclamo(selected): void {
    this.selectedOption = selected;
    this.quejaPeticionId = null;
  }

  ngOnInit(): void {
    this.getPeticionesDisponibles();
    this.getQuejasDisponibles();
    this.selectedOption = 0;
  }
}
