import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { UserService } from '../user.service';
// import { UserObject } from '../userobject';

/* HeaderComponent is the header element that displays at the top of
 * each page and has log out functionality as well as search and a
 * logo that links back home.
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn : boolean = false;
  // myUser : UserObject;
  username:string="";
  constructor(private route: ActivatedRoute,private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        if(this.router.url == "/") {
          this.loggedIn=false;
        }
        else {
          this.loggedIn=true;
        }
      }
    })
    this.username=this.userService.username;
  //   this.router.events
  //   .subscribe((event) => {
  //     if(event instanceof NavigationEnd ){
  //       debugger;
  //       if(this.router.url == "/"){
  //         this.loggedIn = false;
  //       } else {
  //         this.loggedIn = true;
  //       }
  //     }
  //     this.user.getUser().subscribe((res) => {
  //       if(res['isAuthenticated'] == true) {
  //         this.myUser = this.user.createUserObject(res['username'], res['email'], res['givenName'], res['displayName']);
  //       }
  //     });
  //   })
  }

}