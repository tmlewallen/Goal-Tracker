/**
 * Created by Tmlewallen on 5/13/16.
 */
import { Goal } from './goal';
import { Entry } from './entry';
let entry = () : Entry => {
  let e : Entry = new Entry();
  e.timestamp = '06/10/1992';
  e.note = 'I did it!';
  return e;
  // return {timestamp : '06/10/1992', note : 'did it!', state : 'dead', bringToLife : () => {console.log(this.state);this.state = (this.state === 'dead' ? 'alive' : 'dead');}}
};
let goal = () : Goal => {
  let g : Goal = new Goal();
  g.name = 'test2';
  g.description= 'A test goal';
  g.type= 'goal';
  g.startDate= '06/10/1992';
  g.endDate= '06/10/2002';
  g.frequency= 3;
  g.period = 'week'
  g.lastModified= 'today';
  return g;
    //  return {id: '1', name : 'test2', description: 'A test goal', type: 'goal', startDate: '06/10/1992', endDate: '06/10/2002', entries : [], frequency: 3, period: 'week', lastModified: 'today'}
}
var GOALS : Goal[] = [];
for (let i = 1; i < 10; i++){
  let g : Goal = goal();
  g._id = '' + i;
  // console.log(g);
  GOALS.push(g);
}
export let MOCK_GOALS : Goal[] = GOALS;
// export var MOCK_GOALS : Goal[] =  [
//   { id: '1', name : 'test1', description: 'A test goal', type: 'goal', startDate: '06/10/1992', endDate: '06/10/2002', entries : [ {timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'},{timestamp : '06/10/1992', note : 'did it!'}], frequency: 3, period: 'week', lastModified: 'today' },
//   { id: '2', name : 'test2', description: 'A test goal', type: 'goal', startDate: '06/10/1992', endDate: '06/10/2002', entries : [ {timestamp : '06/10/1992', note : 'did it!'}], frequency: 3, period: 'week', lastModified: 'today' },
//   { id: '3', name : 'test2', description: 'A test goal', type: 'goal', startDate: '06/10/1992', endDate: '06/10/2002', entries : [ {timestamp : '06/10/1992', note : 'did it!'}], frequency: 3, period: 'week', lastModified: 'today' },
//   { id: '4', name : 'test2', description: 'A test goal', type: 'goal', startDate: '06/10/1992', endDate: '06/10/2002', entries : [ {timestamp : '06/10/1992', note : 'did it!'}], frequency: 3, period: 'week', lastModified: 'today' },
//   { id: '5', name : 'test2', description: 'A test goal', type: 'goal', startDate: '06/10/1992', endDate: '06/10/2002', entries : [ {timestamp : '06/10/1992', note : 'did it!'}], frequency: 3, period: 'week', lastModified: 'today' },
//   { id: '6', name : 'test2', description: 'A test goal', type: 'goal', startDate: '06/10/1992', endDate: '06/10/2002', entries : [ {timestamp : '06/10/1992', note : 'did it!'}], frequency: 3, period: 'week', lastModified: 'today' },
//   { id: '7', name : 'test2', description: 'A test goal', type: 'goal', startDate: '06/10/1992', endDate: '06/10/2002', entries : [ {timestamp : '06/10/1992', note : 'did it!'}], frequency: 3, period: 'week', lastModified: 'today' },
// ]
