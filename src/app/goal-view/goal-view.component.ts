/**
 * Created by Tmlewallen on 5/13/16.
 */
import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Goal } from '../shared/goal';
import { AniList } from '../ani-list/ani-list.component';


@Component({
  selector: 'goal-view',
  styleUrls: ['./goal-view.style.css'],
  templateUrl: './goal-view.component.html',
})
export class GoalView implements OnInit {
  @Input()
  goal: Goal;
  @Input()
  index : number;

  ngOnInit(){

  }

  getClass(index : number){
    switch(index % 4){
      case 0 :
            return 'tealRow';
      case 1 :
            return 'whiteRow-Teal';
      case 2 :
            return 'violetRow';
      case 3 :
            return 'whiteRow-Violet';
      default :
            return '';
    }
  }
}
