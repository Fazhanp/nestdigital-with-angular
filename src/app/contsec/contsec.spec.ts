import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contsec } from './contsec';

describe('Contsec', () => {
  let component: Contsec;
  let fixture: ComponentFixture<Contsec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contsec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contsec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
