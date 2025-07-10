import { Component, inject, Inject, LOCALE_ID } from '@angular/core';
import { MatDialogContent, MatDialogRef, MatDialogActions } from "@angular/material/dialog";
import { CancelledIrrigationTileComponent } from "../cancelled-irrigation-tile/cancelled-irrigation-tile.component";
import { IrrigationModel } from '../../models/irrigation-model';
import { Utils } from '../../utils';

@Component({
  selector: 'app-cancelled-irrigation-list-view',
  imports: [MatDialogContent, MatDialogActions, CancelledIrrigationTileComponent],
  templateUrl: './cancelled-irrigation-list-view.component.html',
  styleUrl: './cancelled-irrigation-list-view.component.css'
})
export class CancelledIrrigationListViewComponent {

  irrigations: IrrigationModel[] = [
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
    new IrrigationModel(1, new Date(), new Date(), 'Pluie'),
  ];
  readonly dialogRef = inject(MatDialogRef<CancelledIrrigationListViewComponent>);
  locale!: string;

  constructor(@Inject(LOCALE_ID) locale: string) {
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
