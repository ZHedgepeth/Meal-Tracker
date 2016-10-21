"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MealListComponent = (function () {
    function MealListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.selectedDay = "all";
        this.selectedCalories = "all";
    }
    MealListComponent.prototype.onDayChange = function (optionFromMenu) {
        this.selectedDay = optionFromMenu;
    };
    MealListComponent.prototype.onCaloriesChange = function (optionFromMenu) {
        this.selectedCalories = optionFromMenu;
    };
    MealListComponent.prototype.editButtonClicked = function (mealToEdit) {
        this.clickSender.emit(mealToEdit);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MealListComponent.prototype, "childMealList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MealListComponent.prototype, "clickSender", void 0);
    MealListComponent = __decorate([
        core_1.Component({
            selector: 'meal-list',
            template: "\n  <h3>Pick a day to find out what you ate</h3>\n  <select class=\"form-control\" (change)=\"onDayChange($event.target.value)\">\n    <option value=\"all\">Every Day</option>\n    <option value=\"monday\">Monday</option>\n    <option value=\"tuesday\">Tuesday</option>\n    <option value=\"wednesday\">Wednesday</option>\n    <option value=\"thursday\">Thursday</option>\n    <option value=\"friday\">Friday</option>\n    <option value=\"saturday\">Saturday</option>\n    <option value=\"sunday\">Sunday</option>\n  </select>\n  <h3>Find meals that contain less or greater than 500 calories</h3>\n  <select class=\"form-control\" (change)=\"onCaloriesChange($event.target.value)\">\n    <option value=\"all\">All meals</option>\n    <option value=\"less\">Less than 500 calories</option>\n    <option value=\"more\">Greater than 500 calories</option>\n  </select>\n  <div *ngFor=\"let currentMeal of childMealList | day:selectedDay | calories:selectedCalories\">\n    <meal-display [meal]=\"currentMeal\"></meal-display>\n    <button (click)=\"editButtonClicked(currentMeal)\" class=\"btn\">Edit</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map