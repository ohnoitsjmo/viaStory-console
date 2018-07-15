import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username="";
  password="";
  url="";
  constructor() { }

  setUser(user) {
    this.username = user;
  }
    
  setPass(pass) {
    this.password = pass;
  }

  setUrl(url) {
    this.url = url;
  }
}
