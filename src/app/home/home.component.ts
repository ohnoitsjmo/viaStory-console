import { Component, OnInit } from '@angular/core';
import { Images } from '../images';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AngularFirestore } from 'angularfire2/firestore';

export interface Image { id: string; imagePath: string; imageURL: string; imageName: string; maintTs: number; }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  users: Observable<any[]>;
  images: Images[];

  constructor(private db: AngularFirestore) {
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
