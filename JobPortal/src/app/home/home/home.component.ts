import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAppState } from 'src/app/shared/store';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { loginActions } from 'src/app/shared/store/actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private store: Store<IAppState>, private toastr: ToastrService) { }

  ngOnInit() {
  }

  navigateToLogin()
  {
    // this.store.dispatch(new loginActions)
    console.log("navigating to login")
    // this.router.navigateByUrl['/login'];
    return this.router.navigate(['/login/login']);
    // this.store.dispatch(new loginActions.ShowLogin());
  }

}
