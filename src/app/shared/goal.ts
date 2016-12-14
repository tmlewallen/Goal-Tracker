/**
 * Created by Tmlewallen on 5/13/16.
 */

import { Entry } from './entry';
import { GoalPeriod } from './goal-period.enum';
import { GoalType } from './goal-type.enum';

export class Goal {
  _id: string;
  name: string;
  description: string;
  type: GoalType;
  startDate: Date;
  endDate: Date;
  frequency: number;
  period: GoalPeriod;
  lastModified: Date;
}
