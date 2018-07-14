import { Component, OnInit } from '@angular/core';

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

  constructor() { }
  
  ngOnInit() {


  }

}