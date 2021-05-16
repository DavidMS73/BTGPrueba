import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamosListarComponent } from './reclamos-listar.component';

describe('ReclamosListarComponent', () => {
  let component: ReclamosListarComponent;
  let fixture: ComponentFixture<ReclamosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamosListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
