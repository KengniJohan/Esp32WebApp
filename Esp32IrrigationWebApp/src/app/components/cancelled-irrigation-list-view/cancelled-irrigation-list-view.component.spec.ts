import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledIrrigationListViewComponent } from './cancelled-irrigation-list-view.component';

describe('CancelledIrrigationListViewComponent', () => {
  let component: CancelledIrrigationListViewComponent;
  let fixture: ComponentFixture<CancelledIrrigationListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelledIrrigationListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelledIrrigationListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
