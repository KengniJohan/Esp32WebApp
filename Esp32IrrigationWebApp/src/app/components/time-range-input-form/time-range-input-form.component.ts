import { Component, Input } from '@angular/core';
import { TimeInputFormComponent } from "../time-input-form/time-input-form.component";
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'time-range-input-form',
  imports: [TimeInputFormComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './time-range-input-form.component.html',
  styleUrl: './time-range-input-form.component.css'
})
export class TimeRangeInputFormComponent {
  @Input()
  label!: string;

  @Input()
  startFormControlName!: FormControlName;

  @Input()
  endFormControlName!: FormControlName;
}
