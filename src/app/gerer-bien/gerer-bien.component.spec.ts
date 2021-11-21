import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererBienComponent } from './gerer-bien.component';

describe('GererBienComponent', () => {
  let component: GererBienComponent;
  let fixture: ComponentFixture<GererBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
