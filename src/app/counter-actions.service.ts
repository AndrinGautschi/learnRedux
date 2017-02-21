import { Injectable } from '@angular/core';
import {Action} from 'redux';

@Injectable()
export class CounterActionsService {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  constructor() { }

  increment(): Action {
    return {type: CounterActionsService.INCREMENT};
  }

  decrement(): Action {
    return {type: CounterActionsService.DECREMENT};
  }

}
