import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './home/home.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FeedComponent } from './feed/feed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthguardGuard } from './authguard.guard';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    canActivate: [AuthguardGuard],
    component: HomeComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path:'admin',
    component: AdminComponent
  }
]

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent, 
    AppComponent,
    HomeComponent,
    FeedComponent,
    NavbarComponent,
    MapComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  entryComponents : [
  ],
  providers: [
    AngularFireDatabaseModule,
    AuthguardGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
