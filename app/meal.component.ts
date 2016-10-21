import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
  <div>
    <h2 (click)="showDetails()">{{ meal.name }}</h2>
    <div *ngIf="display === true">
      <ul class="list-group">
        <li class="list-group-item">Day: {{ meal.day }}</li>
        <li class="list-group-item">Details: {{ meal.details }}</li>
        <li class="list-group-item">Calories: {{ meal.calories }}</li>
      </ul>
    </div>
  </div>
  `
})
export class MealComponent {
  @Input() meal: Meal;
  public display:boolean = false;
  showDetails() {
    if (this.display) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
}
