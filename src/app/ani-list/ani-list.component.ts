import {
    AfterViewInit, Component, Input, OnInit,
    ElementRef, OnChanges, SimpleChange
} from '@angular/core';
import { Entry } from '../shared/entry';
import { GoalService } from '../shared/goal.service';


@Component({
  selector: 'ani-list',
  styleUrls : ['./ani-list.css'],
  providers: [GoalService],
  templateUrl: './ani-list.component.html'
})
export class AniList implements AfterViewInit, OnChanges {

  @Input()
  goalId : string;
  @Input()
  period : number;
  @Input()
  triggered : boolean;
  entries : Entry[] = [];
  shownEntries : Entry[] = [];

  constructor(elementRef : ElementRef, private goalService : GoalService){
      console.log(elementRef);
  }

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
        if (this.triggered) this.rippleShow(0);
      },
      error => console.error(error)
    );
  }

  ngAfterViewInit(){

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
      for (let propName in changes) {
          switch (propName){
              case 'triggered':
                  if (changes[propName].currentValue){
                      this.rippleShow(0);
                  }
                  break;
              default:
          }
      }

  }

}
