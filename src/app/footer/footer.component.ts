import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { UserService } from '../user.service';

/* FooterComponent is the footer element that displays at the bottom of each page
 * and has navigation links as well as styling.
 */

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  loggedIn : boolean = false;
  year;
  myRole:string;
  isAdmin:boolean;

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
    this.year = new Date().getFullYear();
    // this.router.events
    // .subscribe((event) => {
    //   if(event instanceof NavigationEnd ){
    //     debugger;
    //     if(this.router.url == "/"){
    //       this.loggedIn = false;
    //     } else {
    //       this.loggedIn = true;
    //       this.userService.getRole().then(res => {
    //         this.myRole = res['loggedInUserRole'];
    //         this.isAdmin = res['loggedInUserRole'] == "Admin";
    //         console.log(this.isAdmin);
    //       })
    //     }
    //   }
    // });
  }

}
