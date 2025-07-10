import { Component, Input } from '@angular/core';
import {FormControlName, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'time-input-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './time-input-form.component.html',
  styleUrl: './time-input-form.component.css'
})
export class TimeInputFormComponent {
  @Input()
  label!: string;

 @Input()
 timeFormControlName!: FormControlName;
}
