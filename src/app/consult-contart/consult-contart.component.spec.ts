import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultContartComponent } from './consult-contart.component';

describe('ConsultContartComponent', () => {
  let component: ConsultContartComponent;
  let fixture: ComponentFixture<ConsultContartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultContartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultContartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
