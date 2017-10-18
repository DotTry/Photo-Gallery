import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {AlertModule} from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import {NavbarComponent} from './navbar/navbar.component'; //importing our component
import {GalleryComponent} from './gallery/gallery.component'; 
import {ImageService} from './image-detail/shared/image.service';
import {ImageDetailComponent} from './image-detail/image-detail.component'
import {ImageFilterPipe} from './image-detail/shared/filter.pipe'
import { appRoutes} from '../routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImageDetailComponent
  ],
  imports: [

    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
