import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from './shared/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JobPortal';

  constructor(private router: Router, private store: Store<IAppState>,private activatedRoute:ActivatedRoute){}
  navigateToSignup()
  {
    return this.router.navigate(['/login/signup']);
  }
}
