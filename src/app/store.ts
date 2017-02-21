import {Action} from 'redux';
import {CounterActionsService} from './counter-actions.service';

export interface AppState {
  counter: number;
}

export const INITIAL_STATE: AppState = {
  counter: 0
}

export function rootReducer(lastState: AppState, action: Action): AppState {
  switch (action.type) {
    case CounterActionsService.INCREMENT: return {counter: lastState.counter + 1};
    case CounterActionsService.DECREMENT: return {counter: lastState.counter - 1};
  }
  return lastState;
}
