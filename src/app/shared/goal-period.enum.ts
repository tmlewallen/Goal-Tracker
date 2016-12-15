import { Pipe, PipeTransform } from '@angular/core';

export enum GoalPeriod{
  DAY = 1,
  WEEK,
  MONTH,
  YEAR
}

@Pipe({name: 'goalPeriod'})
export class GoalPeriodPipe implements PipeTransform {
  transform(val : GoalPeriod) : string {
    switch(val){
      case GoalPeriod.DAY:
        return "day";
      case GoalPeriod.WEEK:
        return "week";
      case GoalPeriod.MONTH:
        return "month";
      case GoalPeriod.YEAR:
        return "year";
      default:
        return "";
    }
  }
}