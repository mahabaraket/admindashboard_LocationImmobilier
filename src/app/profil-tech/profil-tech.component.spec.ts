import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilTechComponent } from './profil-tech.component';

describe('ProfilTechComponent', () => {
  let component: ProfilTechComponent;
  let fixture: ComponentFixture<ProfilTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
