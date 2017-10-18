import {Component, OnChanges, Input} from '@angular/core'; //onchanges -- life cycle hook update changes from components aka filters.
import {ImageService} from '../image-detail/shared/image.service';

@Component({
	selector: 'app-gallery', //html tag t o call component.
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges{
	title = 'Recent Photos';
	@Input() filterBy?: string = 'all' //given some value filterby
	visibleImages: any[] = [];

	constructor(private imageService: ImageService){
		this.visibleImages = this.imageService.getImages();
	}

	ngOnChanges(){
		this.visibleImages = this.imageService.getImages();
	}
}

