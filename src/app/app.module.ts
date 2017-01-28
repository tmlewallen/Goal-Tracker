import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoalListView } from './goal-list-view/goal-list-view.component';
import { GoalView } from './goal-view/goal-view.component';
import { AniList } from './ani-list/ani-list.component';
import { GoalTypePipe } from './shared/goal-type.enum';
import { GoalPeriodPipe } from './shared/goal-period.enum';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, GoalListView, GoalView, AniList, GoalTypePipe, GoalPeriodPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
