import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';


@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
 listings:any;
id:any;
  
  imageUrl:any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
      this.firebaseService.getListings().subscribe(listings =>{
      console.log(listings);
      this.listings = listings;
		  
	let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.listings.image);
      storageRef.child(this.listings.image).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
      });
  }

}
