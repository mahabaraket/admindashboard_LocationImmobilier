import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProfilTechComponent } from './modifier-profil-tech.component';

describe('ModifierProfilTechComponent', () => {
  let component: ModifierProfilTechComponent;
  let fixture: ComponentFixture<ModifierProfilTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierProfilTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierProfilTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
