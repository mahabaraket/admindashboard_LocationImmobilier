import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererTechComponent } from './gerer-tech.component';

describe('GererTechComponent', () => {
  let component: GererTechComponent;
  let fixture: ComponentFixture<GererTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
