import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h3>Pick a day to find out what you ate</h3>
  <select class="form-control" (change)="onDayChange($event.target.value)">
    <option value="all">Every Day</option>
    <option value="monday">Monday</option>
    <option value="tuesday">Tuesday</option>
    <option value="wednesday">Wednesday</option>
    <option value="thursday">Thursday</option>
    <option value="friday">Friday</option>
    <option value="saturday">Saturday</option>
    <option value="sunday">Sunday</option>
  </select>
  <div *ngFor="let currentMeal of childMealList | day:selectedDay">
    <meal-display [meal]="currentMeal"></meal-display>
    <button (click)="editButtonClicked(currentMeal)" class="btn">Edit</button>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedDay: string = "all";
  onDayChange(optionFromMenu) {
    this.selectedDay = optionFromMenu;
  }
  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
