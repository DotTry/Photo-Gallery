import { Component } from '@angular/core'; //built in module. 

//Declaring class as component
@Component({
  selector: 'app-root', //how we identify the component
  templateUrl: './app.component.html', //
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gallery works'; //store variables
  subtitle = 'Latest Photographs';
}
