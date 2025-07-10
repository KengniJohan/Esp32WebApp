import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cancelled-irrigation-tile',
  imports: [MatIconModule],
  templateUrl: './cancelled-irrigation-tile.component.html',
  styleUrl: './cancelled-irrigation-tile.component.css'
})
export class CancelledIrrigationTileComponent {
  @Input()
  hourRange!: String;

  @Input()
  dateRange!: String;

  @Input()
  reason!: String;
}
