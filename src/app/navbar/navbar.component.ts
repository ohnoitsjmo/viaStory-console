import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';

/* NavbarComponent is the navigation bar element that controls
 * routing throughout PlanWizard. It conditionally shows pages
 * a user can access based on their user role.
 */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myRole:string;
  isAdmin:boolean;

  constructor() { }
  
  ngOnInit() {
    // this.userService.getRole().then(res => {
    //   this.myRole = res['role'];
    //   this.isAdmin = res['role'] == "admin";
    // })

    // this.userService.getRole().then(res => {
    //   console.log(res);
    //   this.myRole = res['loggedInUserRole'];
    //   this.isAdmin = res['loggedInUserRole'] == "Admin";
    // })
    this.myRole="Admin";
    this.isAdmin=true;

  }

}
