import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserService } from './user.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthguardGuard implements CanActivate {
  users:any[]
	constructor(private user: UserService, private db: AngularFirestore, private router:Router, private http:HttpClient) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
        return new Promise<boolean>(resolve => {
          this.db.collection('/userAuth').doc('VQ3Y5ufxgGSAChehiMhY').valueChanges().subscribe(results =>
            {
              this.users = results['authentication'];
              for (var i=0; i<this.users.length; i++) {
                if (this.user.username == this.users[i].username) {
                  if (this.user.password == this.users[i].password) {
                    resolve(true);
                    return;
                  }
                }
              }
              this.router.navigate(['']);
              resolve(false);
            }
          )
      });
   }
}