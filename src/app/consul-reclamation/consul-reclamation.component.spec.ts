import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulReclamationComponent } from './consul-reclamation.component';

describe('ConsulReclamationComponent', () => {
  let component: ConsulReclamationComponent;
  let fixture: ComponentFixture<ConsulReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
