import {Component, OnInit} from '@angular/core';
import {ImageService} from './shared/image.service';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-image-detail', //html tag to call component.
	templateUrl: './image-detail.component.html',
	styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent implements OnInit { //we're gonna api call this to a database. right now, static images.
	image:any
	constructor(private imageService: ImageService, private route: ActivatedRoute){}

	ngOnInit(){ //hook
		this.image = this.imageService.getImage(
			+this.route.snapshot.params['id'] //giving id by fetching routing info
		)
	}
}