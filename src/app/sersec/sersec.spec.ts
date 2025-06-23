import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sersec } from './sersec';

describe('Sersec', () => {
  let component: Sersec;
  let fixture: ComponentFixture<Sersec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sersec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sersec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
