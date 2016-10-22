import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "day",
  pure: false
})

export class DayPipe implements PipeTransform {
  transform(input: Meal[], desiredDay) {
    var output: Meal[] = [];
    if(desiredDay === "monday")
    {
      for (var i=0; i < input.length; i++)
      {
        if (input[i].day === "monday")
        {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredDay === "tuesday")
    {
      for(var i=0; i < input.length; i++)
      {
        if(input[i].day === "tuesday")
        {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredDay === "wednesday")
    {
      for(var i=0; i < input.length; i++)
      {
        if(input[i].day === "wednesday")
        {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredDay === "thursday")
    {
      for(var i=0; i < input.length; i++)
      {
        if(input[i].day === "thursday")
        {
          output.push(input[i]);
        }
      }
      return output;
    }  else if(desiredDay === "friday")
    {
      for(var i=0; i < input.length; i++)
      {
        if(input[i].day === "friday")
        {
          output.push(input[i]);
        }
      }
      return output;
    }  else if(desiredDay === "saturday")
    {
      for(var i=0; i < input.length; i++)
      {
        if(input[i].day === "saturday")
        {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredDay === "sunday")
    {
      for(var i=0; i < input.length; i++)
      {
        if(input[i].day === "sunday")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
        return input;
    }
  }
}
