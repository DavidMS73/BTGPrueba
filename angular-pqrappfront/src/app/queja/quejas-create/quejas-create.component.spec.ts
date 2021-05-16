import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasCreateComponent } from './quejas-create.component';

describe('QuejasCreateComponent', () => {
  let component: QuejasCreateComponent;
  let fixture: ComponentFixture<QuejasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuejasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
