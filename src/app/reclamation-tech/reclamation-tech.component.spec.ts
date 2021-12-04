import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationTechComponent } from './reclamation-tech.component';

describe('ReclamationTechComponent', () => {
  let component: ReclamationTechComponent;
  let fixture: ComponentFixture<ReclamationTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
