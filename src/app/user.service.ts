import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username="";
  password="";
  loggedIn:boolean=false;
  constructor() { }

  setUser(user) {
    this.username = user;
  }
  
  setPass(pass) {
    this.password = pass;
  }

}
