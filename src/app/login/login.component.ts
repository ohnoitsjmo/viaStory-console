import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service'

/* LoginFormComponent is the page where users authenticate
 * their credentials with the Viasat LDAP server. It acts as
 * the wall that users must get past to use PlanWizard.
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn : boolean = false;
  
  constructor(private user: UserService, private router:Router, private http:HttpClient) {}
  ngOnInit() { 
  }

  authenticateCurrentUser(e){
    e.preventDefault();
    this.user.setUser(e.target.elements[0].value);
    this.user.setPass(e.target.elements[1].value);
    this.router.navigate(['/home']);
  }
}