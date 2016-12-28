import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `

    <div id="add-meal">
    <h2 id="add-meal-title">ADD A MEAL:</h2>
    <div class="day">
      <label>What day is it?</label>
      <select class="form-control" #newDay>
        <option value="all">Every Day</option>
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
        <option value="sunday">Sunday</option>
      </select>
      <label>Name of your meal:</label>
      <input class="form-control" #newName>
      <label>Enter some details about this meal</label>
      <input class="form-control" id="details" #newDetails>
      <label>Calories:</label>
      <input class="form-control" id="calories" placeholder="250" #newCalories>
    </div>
    <br>
    <button class="btn btn-info" (click)="
      addClicked(newDay.value, newName.value, newDetails.value, newCalories.value);
      newDay.value='';
      newName.value='';
      newDetails.value='';
      newCalories.value='';
    ">ADD A MEAL</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(day: string, name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(day, name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
