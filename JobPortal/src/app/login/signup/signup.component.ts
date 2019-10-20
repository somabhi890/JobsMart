import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 selectedRole = "";
  constructor() {
    
   }

  ngOnInit() {
  }

  selectRole(role:string){
    this.selectedRole=role;
  }

}
