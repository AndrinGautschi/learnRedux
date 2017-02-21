import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from './store';
import {CounterActionsService} from './counter-actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;

  constructor(private ngRedux: NgRedux<AppState>,
              private actions: CounterActionsService) {
    ngRedux.select<number>('counter')
      .subscribe(newCounter => this.counter = newCounter);
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
