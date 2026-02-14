import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Love } from './love';

describe('Love', () => {
  let component: Love;
  let fixture: ComponentFixture<Love>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Love]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Love);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
