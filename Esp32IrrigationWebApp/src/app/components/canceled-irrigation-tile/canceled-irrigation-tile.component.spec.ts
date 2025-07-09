import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledIrrigationTileComponent } from './canceled-irrigation-tile.component';

describe('CanceledIrrigationTileComponent', () => {
  let component: CanceledIrrigationTileComponent;
  let fixture: ComponentFixture<CanceledIrrigationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanceledIrrigationTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanceledIrrigationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
