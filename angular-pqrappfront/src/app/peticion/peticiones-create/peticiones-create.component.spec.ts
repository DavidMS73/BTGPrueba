import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesCreateComponent } from './peticiones-create.component';

describe('PeticionesCreateComponent', () => {
  let component: PeticionesCreateComponent;
  let fixture: ComponentFixture<PeticionesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
