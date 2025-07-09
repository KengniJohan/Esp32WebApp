import { Component } from '@angular/core';
import { HomeViewCardComponent } from "./components/home-view-card/home-view-card.component";
import {MatIconModule} from '@angular/material/icon';
import { IrrigationTileComponent } from "./components/irrigation-tile/irrigation-tile.component";
import { CanceledIrrigationTileComponent } from "./components/canceled-irrigation-tile/canceled-irrigation-tile.component";

@Component({
  selector: 'app-root',
  imports: [HomeViewCardComponent, MatIconModule, IrrigationTileComponent, CanceledIrrigationTileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esp32IrrigationWebApp';
}
