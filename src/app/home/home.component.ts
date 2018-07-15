import { Component, OnInit } from '@angular/core';
import { Images } from '../images';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import 'rxjs/add/operator/map';

import { AngularFirestore } from 'angularfire2/firestore';

export interface Image { user: UserService, id: string; imagePath: string; imageURL: string; imageName: string; maintTs: number; }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  users: Observable<any[]>;
  images: Images[];
  listofcats: string[] = ["all", "food", "project", "recreation", "event"];

  constructor(private db: AngularFirestore, private user: UserService) {
      this.users = db.collection('/users').valueChanges();
      db.collection('/posts').doc('Image').valueChanges().subscribe(results =>
        {
          this.images = results['images'] as Images[];
        }
      )
  }
  ngOnInit() {
  }
}
