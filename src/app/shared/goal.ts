/**
 * Created by Tmlewallen on 5/13/16.
 */

import { Entry } from './entry';

export class Goal {
  _id: string;
  name: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  entries: Entry[];
  frequency: number;
  period: string;
  lastModified: string;
}
