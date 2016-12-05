/**
 * Created by Tmlewallen on 5/13/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Goal } from '../shared/Goal';
import { MOCK_GOALS } from './mock-data';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GoalService {
  private goalUrl : string = '/rs/goal/list';
  private entryUrl : string = '/rs/goal/list/';

  constructor(private http : Http){

  }

  // getGoals(){
  //   return Promise.resolve(MOCK_GOALS);
  // }
  getGoals(): Observable<Goal[]>{
    return this.http.get(this.goalUrl)
                    .map(this.extract)
                    .catch( (err) => {
                      console.error(err);
                      return Observable.throw("uh oh!");
                    });
  }

  getEntries(goalId : string){
    return this.http.get(this.entryUrl + goalId + '/entries')
                    .map(this.extract)
                    .catch( (err) => {
                      console.error(err);
                      return Observable.throw("uh oh!");
                    })
  }

  private extract(res : Response){
    let body = res.json();
    return body || { };
  }

}
