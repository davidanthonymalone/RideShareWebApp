import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;

  constructor(private af: AngularFire) { }

  getListings(){
    this.listings = this.af.database.list('/RideShare') as FirebaseListObservable<Listing[]>
    return this.listings;
  }
  
  getListingDetails(id){
	  this.listing = this.af.database.object('/RideShare/'+id) as FirebaseObjectObservable<Listing>
		  
		  return this.listing;
  
  }

}

interface Listing{
    $key?:string;
    goingToLat?:number;
    goingToLng?:number;
    image?:string;
    leaving?:string;
    noOfSeats?:number;
    seatsRemaining?:number;
    username?:string;
}











