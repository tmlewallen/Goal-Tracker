/**
 * Created by Tmlewallen on 5/13/16.
 */

import { Component, OnInit } from '@angular/core';
import { Entry } from '../shared/entry';
import { Goal } from '../shared/goal';
import { GoalService } from '../shared/goal.service';
// import { Entry, Goal, GoalService } from '../shared';
import { GoalView } from '../goal-view/goal-view.component';

@Component({
  selector: 'goal-list-view',
  providers: [GoalService],
  templateUrl: 'app/goal-list-view/goal-list-view.component.html'
})
export class GoalListView implements OnInit {
  
  goals : Goal[];

  constructor(private goalService : GoalService){ this.goalService = goalService}
  
  ngOnInit(){
    this.goalService.getGoals().subscribe( (goals) => {
      this.goals = goals
    }, 
    err => console.error(err));
  }
  
}
