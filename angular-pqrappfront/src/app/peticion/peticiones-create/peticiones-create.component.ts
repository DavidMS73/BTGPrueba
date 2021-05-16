import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Peticion } from '../peticion';
import { PeticionService } from '../peticion.service';

@Component({
  selector: 'app-peticiones-create',
  templateUrl: './peticiones-create.component.html',
  styleUrls: ['./peticiones-create.component.css'],
})
export class PeticionesCreateComponent implements OnInit {
  peticionForm: FormGroup;

  constructor(
    private peticionService: PeticionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.peticionForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      detalle: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  cancelCreation(): void {
    this.router.navigate(['/peticion/list']);
    this.peticionForm.reset();
  }

  createPeticion(peticionC: Peticion): void {
    this.peticionService.createPeticion(peticionC).subscribe(
      (peticion) => {
        this.router.navigate(['/peticion/list']);
        this.peticionForm.reset();
      },
      (err) => {
        console.error(err, 'Error');
      }
    );
  }

  ngOnInit(): void {}
}
