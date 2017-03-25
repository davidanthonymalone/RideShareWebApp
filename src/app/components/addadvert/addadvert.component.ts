import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addadvert',
  templateUrl: './addadvert.component.html',
  styleUrls: ['./addadvert.component.css']
})
export class AddadvertComponent implements OnInit {
   
   
    image:any;
    goingTo:any;
	comingFrom:any;
    noOfSeats:any;
  constructor(
	  private firebaseService:FirebaseService,
	  private router:Router
  
  ) { }

  ngOnInit() {
  }
onAddSubmit(){
	
	let listing = {
		image: this.image,
		comingFrom: this.comingFrom,
		noOfSeats: this.noOfSeats,
		goingTo: this.goingTo
	}
	
	this.firebaseService.addListing(listing);
	this.router.navigate(['adverts']);
}
}
