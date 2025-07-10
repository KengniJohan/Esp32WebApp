import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationListViewComponent } from './irrigation-list-view.component';

describe('IrrigationListViewComponent', () => {
  let component: IrrigationListViewComponent;
  let fixture: ComponentFixture<IrrigationListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrrigationListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigationListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
