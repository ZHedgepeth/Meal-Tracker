import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealComponent } from './meal.component';
import { EditMealComponent } from './edit-meal.component';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './new-meal.component';
import { DayPipe } from './day.pipe';
import { CaloriesPipe } from './calories.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EditMealComponent,
    MealListComponent,
    MealComponent,
    NewMealComponent,
    DayPipe,
    CaloriesPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
