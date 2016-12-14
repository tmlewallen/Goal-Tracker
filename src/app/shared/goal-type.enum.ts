import { Pipe, PipeTransform } from '@angular/core';

export enum GoalType{
  TARGET = 1,
  HABIT
}

@Pipe({name: 'goalType'})
export class GoalTypePipe implements PipeTransform {
  transform(val : GoalType) : string {
    switch(val){
      case GoalType.TARGET:
        return "Target";
      case GoalType.HABIT:
        return "Habit";
      default :
        return "";
    }
  }
}