import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInputFormComponent } from './time-input-form.component';

describe('TimeInputFormComponent', () => {
  let component: TimeInputFormComponent;
  let fixture: ComponentFixture<TimeInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeInputFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
