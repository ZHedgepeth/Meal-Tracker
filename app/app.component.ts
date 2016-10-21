import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <h1 class="app-title">SIR CHOW GUMSHOE</h1>
  </header>
  <div class="container">
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
    ></meal-list>
    <br>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Tuesday", "Hamburger", "It was delicious, but fattening :/", 789),
    new Meal("Wednesday", "Flatbread Pizza", "It had mushrooms onions and arugala so I got some veggies", 423),
    new Meal("Thursday", "Milkshake", "Vanilla and amazing", 395)
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

}
