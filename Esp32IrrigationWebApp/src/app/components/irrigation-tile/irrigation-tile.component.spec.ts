import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationTileComponent } from './irrigation-tile.component';

describe('IrrigationTileComponent', () => {
  let component: IrrigationTileComponent;
  let fixture: ComponentFixture<IrrigationTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrrigationTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrigationTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
