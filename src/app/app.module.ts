import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {CounterActionsService} from './counter-actions.service';
import {AppState, INITIAL_STATE, rootReducer} from './store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [
    CounterActionsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>) {
    this.ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
