import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
    this.folder = 'RideShare';
    this.listings = this.af.database.list('/RideShare') as FirebaseListObservable<Listing[]>
  }

  getListings(){
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.database.object('/RideShare/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }

  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let image = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(image);
	
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = snapshot.downloadURL;
        return this.listings.push(listing);
      });
    }
  }

  updateListing(id, listing){
    return this.listings.update(id, listing);
  }

  deleteListing(id){
    return this.listings.remove(id);
  }

}

interface Listing{
 $key?:string;
    goingToLat?:number;
    goingToLng?:number;
    image?:string;
    goingTo?:string;
	comingFrom?:string;
    noOfSeats?:number;
    seatsRemaining?:number;
    username?:string;
}




