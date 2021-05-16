import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasListarComponent } from './quejas-listar.component';

describe('QuejasListarComponent', () => {
  let component: QuejasListarComponent;
  let fixture: ComponentFixture<QuejasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuejasListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
