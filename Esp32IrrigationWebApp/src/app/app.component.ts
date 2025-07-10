import { Component, inject } from '@angular/core';
import { HomeViewCardComponent } from "./components/home-view-card/home-view-card.component";
import { MatIconModule } from '@angular/material/icon';
import { IrrigationTileComponent } from "./components/irrigation-tile/irrigation-tile.component";
import { CancelledIrrigationTileComponent } from "./components/cancelled-irrigation-tile/cancelled-irrigation-tile.component";
import { MatDialog } from '@angular/material/dialog';
import { IrrigationListViewComponent } from './components/irrigation-list-view/irrigation-list-view.component';
import { CancelledIrrigationListViewComponent } from './components/cancelled-irrigation-list-view/cancelled-irrigation-list-view.component';

@Component({
  selector: 'app-root',
  imports: [
    HomeViewCardComponent,
     MatIconModule, 
     IrrigationTileComponent, 
     CancelledIrrigationTileComponent,
     
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Système d'arrosage intelligent";
  readonly dialog = inject(MatDialog);

  openIrrigationListViewDialog(): void {
    this.dialog.open(IrrigationListViewComponent);
  }

  openCancelledIrrigationViewDialog(): void {
    this.dialog.open(CancelledIrrigationListViewComponent);
  }
}
