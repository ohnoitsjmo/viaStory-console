import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserService } from './user.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class AuthguardGuard implements CanActivate {
  userr:any;
	constructor(private userService: UserService, private db: AngularFirestore, private router:Router, private http:HttpClient) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            this.db.collection('userAuth', ref => ref.where("username", '==', this.userService.username)).valueChanges().subscribe(ref => {
              if (ref[0]["password"] == this.userService.password) {
                resolve(true);
              } else {
                this.router.navigate(['']);
                resolve(false);
              }
            });
          })
    }
  }