import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPallComponent } from './pay-pall.component';

describe('PayPallComponent', () => {
  let component: PayPallComponent;
  let fixture: ComponentFixture<PayPallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
