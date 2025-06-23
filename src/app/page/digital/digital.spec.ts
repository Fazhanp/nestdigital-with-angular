import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Digital } from './digital';

describe('Digital', () => {
  let component: Digital;
  let fixture: ComponentFixture<Digital>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Digital]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Digital);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
