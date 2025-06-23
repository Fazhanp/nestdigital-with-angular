import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abtsection } from './abtsection';

describe('Abtsection', () => {
  let component: Abtsection;
  let fixture: ComponentFixture<Abtsection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abtsection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abtsection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
