//first service.
import {Injectable} from '@angular/core'; //dependency injection.

@Injectable()
export class ImageService{
	visibleImages = [];
	getImages(){
		return this.visibleImages = IMAGES.slice(0);
	}

	getImage(id:number){
		return IMAGES.slice(0).find(image=>image.id == id)
	}
}

const IMAGES = [ //structure of image object. Hard code array of json
	{"id": 1, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.jpg" },
	{"id": 2, "category": "boats", "caption": "Sailing from a boat", "url": "assets/img/boat_01.jpg" },
	{"id": 3, "category": "boats", "caption": "Winning from a boat", "url": "assets/img/boat_01.jpg" },
	{"id": 4, "category": "boats", "caption": "Chilling from a boat", "url": "assets/img/boat_01.jpg" },
	{"id": 5, "category": "boats", "caption": "Reading from a boat", "url": "assets/img/boat_01.jpg" },
	{"id": 6, "category": "boats", "caption": "OK from a boat", "url": "assets/img/boat_01.jpg" },

]