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
var core_1 = require("@angular/core");
var meal_model_1 = require("./meal.model");
var NewMealComponent = (function () {
    function NewMealComponent() {
        this.newMealSender = new core_1.EventEmitter();
    }
    NewMealComponent.prototype.addClicked = function (day, name, details, calories) {
        var newMealToAdd = new meal_model_1.Meal(day, name, details, calories);
        this.newMealSender.emit(newMealToAdd);
    };
    return NewMealComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewMealComponent.prototype, "newMealSender", void 0);
NewMealComponent = __decorate([
    core_1.Component({
        selector: 'new-meal',
        template: "\n    <h2>Add your meal below</h2>\n    <div>\n      <label>What day is it?</label>\n      <input class=\"form-control\" #newDay>\n      <label>Name of your meal:</label>\n      <input class=\"form-control\" #newName>\n      <label>Enter some details about this meal</label>\n      <input class=\"form-control\" #newDetails>\n      <label>Calories:</label>\n      <input class=\"form-control\" #newCalories>\n    </div>\n    <br>\n    <button class=\"btn btn-info\" (click)=\"\n      addClicked(newDay.value, newName.value, newDetails.value, newCalories.value);\n      newDay.value='';\n      newName.value='';\n      newDetails.value='';\n      newCalories.value='';\n    \">ADD A MEAL</button>\n  "
    }),
    __metadata("design:paramtypes", [])
], NewMealComponent);
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=add-meal.component.js.map