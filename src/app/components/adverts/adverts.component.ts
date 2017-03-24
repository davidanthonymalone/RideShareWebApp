import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';


@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
    listings:any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
      this.firebaseService.getListings().subscribe(listings =>{
          console.log(listings);
          this.listings = listings;
      });
  }

}
