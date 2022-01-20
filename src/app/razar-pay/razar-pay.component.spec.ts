import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazarPayComponent } from './razar-pay.component';

describe('RazarPayComponent', () => {
  let component: RazarPayComponent;
  let fixture: ComponentFixture<RazarPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazarPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazarPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
