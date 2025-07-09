import { Component, Input, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'irrigation-tile',
  imports: [MatIconModule],
  templateUrl: './irrigation-tile.component.html',
  styleUrl: './irrigation-tile.component.css'
})
export class IrrigationTileComponent {
  @Input()
  hourRange!: String;

  @Input()
  dateRange!: String;
}
