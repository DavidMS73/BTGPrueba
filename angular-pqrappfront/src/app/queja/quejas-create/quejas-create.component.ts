import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Queja } from '../queja';
import { QuejaService } from '../queja.service';

@Component({
  selector: 'app-quejas-create',
  templateUrl: './quejas-create.component.html',
  styleUrls: ['./quejas-create.component.css'],
})
export class QuejasCreateComponent implements OnInit {
  quejaForm: FormGroup;

  constructor(
    private quejaService: QuejaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.quejaForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      detalle: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  cancelCreation(): void {
    this.router.navigate(['/queja/list']);
    this.quejaForm.reset();
  }

  createPeticion(quejaC: Queja): void {
    this.quejaService.createQueja(quejaC).subscribe(
      (peticion) => {
        this.toastr.success('La queja fue creada correctamente');
        this.router.navigate(['/queja/list']);
        this.quejaForm.reset();
      },
      (err) => {
        this.toastr.error(err, 'Error');
        console.error(err, 'Error');
      }
    );
  }

  ngOnInit(): void {}
}
