import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';/*AO dodaje zeby dzielic dane miedyz komponentami*/

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another sily life goal'])
  goal = this.goals.asObservable();/*AO po co to?*/

  constructor() {
  }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
