import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-view-card',
  imports: [CommonModule],
  templateUrl: './home-view-card.component.html',
  styleUrl: './home-view-card.component.css'
})
export class HomeViewCardComponent {
  @Input()
  title!: String;

  @Input()
  subtitle?: String;

  @Input()
  value!: String;
}
