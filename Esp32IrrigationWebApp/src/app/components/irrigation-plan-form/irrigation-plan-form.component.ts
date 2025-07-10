import { Component, inject } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogTitle, MatDialogRef } from "@angular/material/dialog";
import { TimeRangeInputFormComponent } from "../time-range-input-form/time-range-input-form.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'irrigation-plan-form',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    TimeRangeInputFormComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './irrigation-plan-form.component.html',
  styleUrl: './irrigation-plan-form.component.css'
})
export class IrrigationPlanFormComponent {
  irrigationFormGroup = new FormGroup({
    startHour1: new FormControl(),
    endHour1: new FormControl(),
    startHour2: new FormControl(),
    endHour2: new FormControl(),
  });
  readonly dialogRef = inject(MatDialogRef<IrrigationPlanFormComponent>);


  onCloseDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.irrigationFormGroup.value)
  }
}
