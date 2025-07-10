import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationPlanFormComponent } from './irrigation-plan-form.component';

describe('IrrigationPlanFormComponent', () => {
  let component: IrrigationPlanFormComponent;
  let fixture: ComponentFixture<IrrigationPlanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrrigationPlanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigationPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
