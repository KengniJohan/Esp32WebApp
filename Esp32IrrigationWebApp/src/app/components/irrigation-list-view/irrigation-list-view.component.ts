import { Component, Inject, inject, LOCALE_ID } from '@angular/core';
import { IrrigationModel } from '../../models/irrigation-model';
import { MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { CommonModule, formatDate } from '@angular/common';
import { IrrigationTileComponent } from "../irrigation-tile/irrigation-tile.component";
import { Utils } from '../../utils';

@Component({
  selector: 'irrigation-list-view',
  imports: [MatDialogContent, IrrigationTileComponent, MatDialogActions],
  templateUrl: './irrigation-list-view.component.html',
  styleUrl: './irrigation-list-view.component.css'
})
export class IrrigationListViewComponent {
  irrigations: IrrigationModel[] = [
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
    new IrrigationModel(1, new Date(), new Date()),
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
