import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledIrrigationTileComponent as CancelledIrrigationTileComponent } from './cancelled-irrigation-tile.component';

describe('CancelledIrrigationTileComponent', () => {
  let component: CancelledIrrigationTileComponent;
  let fixture: ComponentFixture<CancelledIrrigationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelledIrrigationTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelledIrrigationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
