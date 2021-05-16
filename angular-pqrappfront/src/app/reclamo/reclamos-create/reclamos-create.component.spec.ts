import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamosCreateComponent } from './reclamos-create.component';

describe('ReclamosCreateComponent', () => {
  let component: ReclamosCreateComponent;
  let fixture: ComponentFixture<ReclamosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
