import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector:'edit-meal',
  template:`
  <div *ngIf="childSelectedMeal">
    <h1>Edit a meal</h1>
    <div>
      <label>Update the name of your meal:</label>
      <input class="form-control" [(ngModel)]="childSelectedMeal.name">
      <label>Update the day of your meal:</label>
      <select class="form-control" [(ngModel)]="childSelectedMeal.day">
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
        <option value="sunday">Sunday</option>
      </select>
      <label>Update the details of your meal:</label>
      <input class="form-control" [(ngModel)]="childSelectedMeal.details">
      <label>Update the calories in your meal:</label>
      <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
      <br>
      <button (click)="doneClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
