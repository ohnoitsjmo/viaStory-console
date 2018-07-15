import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  url = "";
  constructor( private user: UserService ) { }

  ngOnInit() {
    this.url = this.user.url;
  }

}
