import { AfterViewInit, Component, Input, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Entry } from '../shared/entry';
import { GoalService } from '../shared/goal.service';


@Component({
  selector: 'ani-list',
  styleUrls : ['./ani-list.css'],
  providers: [GoalService],
  templateUrl: './ani-list.component.html'
})
export class AniList implements AfterViewInit, OnInit {

  @Input()
  goalId : string;
  @Input()
  period : number;
  entries : Entry[] = [];
  shownEntries : Entry[] = [];

  constructor(private goalService : GoalService){ }

  rippleShow(index : number){
    if(index < this.entries.length){
      this.shownEntries.push(this.entries[index]);
      setTimeout(()=>{
        this.rippleShow(index + 1)
      }, 50);
    }
  };

  ngOnInit() {
    this.goalService.getEntries(this.goalId).subscribe(
      (result) => {
        this.entries = result;
        console.log(this.entries);
        this.rippleShow(0);
      },
      error => console.error(error)
    );
  }

  ngAfterViewInit(){

  }

}
