import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutCardComponent } from './doughnut-card.component';

describe('DoughnutCardComponent', () => {
  let component: DoughnutCardComponent;
  let fixture: ComponentFixture<DoughnutCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoughnutCardComponent]
    });
    fixture = TestBed.createComponent(DoughnutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
