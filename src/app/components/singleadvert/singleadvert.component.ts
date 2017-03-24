import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-singleadvert',
  templateUrl: './singleadvert.component.html',
  styleUrls: ['./singleadvert.component.css']
})
export class SingleadvertComponent implements OnInit {
id: any;
listing: any;
imageUrl: any;
  constructor(
  	private firebaseService:FirebaseService,
	private router:Router,
	private route:ActivatedRoute
  
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.listing = listing;
		console.log(listing)
    });
  }

}
