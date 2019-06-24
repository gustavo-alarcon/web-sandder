import { Component, OnInit, ViewChild } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  @ViewChild(NgScrollbar, {static:true}) scrollRef: NgScrollbar;

  landingImage = 'assets/images/img4.jpg';

  // images: Array<string> = [
  //   'assets/images/PORTADA1.jpg',
  //   'assets/images/PORTADA2.jpg',
  //   'assets/images/PORTADA3.jpg'
  // ];

  images: GalleryItem[];

  currentImage = '';
  counter = 0;
  sliderInterval = null;

  caroussel = false;
  navBgColor = 'none';

  constructor() { }

  ngOnInit() {
    // this.currentImage = this.images[0];

    // if (this.caroussel) {
    //   this.sliderInterval = setInterval(() => {
    //     this.counter++;
    //     this.currentImage = this.images[(this.counter) % this.images.length];
    //     console.log('interval');
    //   }, 3000);
    // }

    this.images = [
      new ImageItem({ src: 'assets/images/PORTADA1.jpg', thumb: 'assets/images/PORTADA1.jpg' }),
      new ImageItem({ src: 'assets/images/PORTADA2.jpg', thumb: 'assets/images/PORTADA2.jpg' }),
      new ImageItem({ src: 'assets/images/PORTADA3.jpg', thumb: 'assets/images/PORTADA3.jpg' }),
    ];

    this.scrollRef.scrollable.elementScrolled().subscribe(res => {
      if (res['target']['scrollTop'] > 116) {
        this.navBgColor = 'white';
      } else {
        this.navBgColor = 'none';
      }
    })

  }

  ngOnDestroy() {
    this.sliderInterval.clearInterval();
  }

  goToCollections(): void {
    this.scrollRef.scrollToElement('#collections',116,2000);
  }

}
