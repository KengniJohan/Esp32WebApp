import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'canceled-irrigation-tile',
  imports: [MatIconModule],
  templateUrl: './canceled-irrigation-tile.component.html',
  styleUrl: './canceled-irrigation-tile.component.css'
})
export class CanceledIrrigationTileComponent {
  @Input()
  hourRange!: String;

  @Input()
  dateRange!: String;

  @Input()
  reason!: String;
}
