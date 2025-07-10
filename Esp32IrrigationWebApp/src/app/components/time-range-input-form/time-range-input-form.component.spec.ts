import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRangeInputFormComponent } from './time-range-input-form.component';

describe('TimeRangeInputFormComponent', () => {
  let component: TimeRangeInputFormComponent;
  let fixture: ComponentFixture<TimeRangeInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeRangeInputFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeRangeInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
