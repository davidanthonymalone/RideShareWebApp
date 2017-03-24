import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {FirebaseService} from './services/firebase.service';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdvertsComponent } from './components/adverts/adverts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SingleadvertComponent } from './components/singleadvert/singleadvert.component';
import { AddadvertComponent } from './components/addadvert/addadvert.component';
export const firebaseConfig = {
    apiKey: "AIzaSyBdRUtdt5lN5i4hXzJTI1bWyBF8xWBp9SM",
    authDomain: "ridesharefinalproject.firebaseapp.com",
    databaseURL: "https://ridesharefinalproject.firebaseio.com",
    storageBucket: "ridesharefinalproject.appspot.com",
    messagingSenderId: "1005561724702"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};
const appRoutes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'rideshares', component:AdvertsComponent},
	{path: 'singleadvert/:id', component:SingleadvertComponent},
    {path: 'addadvert', component:AddadvertComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvertsComponent,
    NavbarComponent,
    SingleadvertComponent,
    AddadvertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
