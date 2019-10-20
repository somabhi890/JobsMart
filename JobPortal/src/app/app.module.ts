import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, INITIAL_STATE } from '@ngrx/store';
import * as effects from './shared/store/effects';
import * as services from './shared/services';
import { IAppState } from './shared/store';
import { BaseAction } from './shared/store/actions/base.actions';
import { appReducer } from './shared/store/reducers';
import { ToastrModule } from 'ngx-toastr';
import { Http,HttpModule} from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot({ timeOut: 8000, extendedTimeOut: 2000, preventDuplicates: true, maxOpened: 1 }),
    StoreModule.forRoot<IAppState, BaseAction>(appReducer),
    EffectsModule.forRoot(effects.allEffects),
    TooltipModule.forRoot(),
    
  ],
  providers: [ ...services.allServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
