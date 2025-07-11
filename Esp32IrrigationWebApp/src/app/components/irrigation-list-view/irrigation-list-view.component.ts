import { Component, Inject, inject, LOCALE_ID } from '@angular/core';
import { IrrigationModel } from '../../models/irrigation-model';
import { MatDialogRef, MatDialogContent, MatDialogActions, MatDialogTitle } from '@angular/material/dialog';
import { IrrigationTileComponent } from "../irrigation-tile/irrigation-tile.component";
import { Utils } from '../../utils';

@Component({
  selector: 'irrigation-list-view',
  imports: [
    MatDialogContent, 
    IrrigationTileComponent, 
    MatDialogActions,
    MatDialogTitle,
  ],
  templateUrl: './irrigation-list-view.component.html',
  styleUrl: './irrigation-list-view.component.css'
})
export class IrrigationListViewComponent {
  irrigations: IrrigationModel[] = [
    new IrrigationModel(1, new Date(2025, 7, 7, 8, 0), new Date(2025, 7, 7, 8, 0)),
    new IrrigationModel(1, new Date(2025, 7, 6, 16, 0), new Date(2025, 7, 6, 16, 30)),
    new IrrigationModel(1, new Date(2025, 7, 6, 8, 0), new Date(2025, 7, 6, 8, 30)),
    new IrrigationModel(1, new Date(2025, 7, 5, 16, 0), new Date(2025, 7, 5, 16, 30)),
    new IrrigationModel(1, new Date(2025, 7, 5, 8, 0), new Date(2025, 7, 5, 8, 30)),
  ];
  readonly dialogRef = inject(MatDialogRef<IrrigationListViewComponent>);
  locale!: string;

  constructor(@Inject(LOCALE_ID)  locale: string) {
    this.locale = locale;
   }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  getFormattedTimeRange(start: Date, end: Date): any {
    return Utils.getFormattedTimeRange(start, end, this.locale);
  }

  getFormattedDate(date: Date): any {
    return Utils.getFormattedDate(date, this.locale);
  }
}
