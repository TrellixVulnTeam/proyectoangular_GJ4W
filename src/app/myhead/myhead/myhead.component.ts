import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-myhead',
  templateUrl: './myhead.component.html',
  styleUrls: ['./myhead.component.css'],
  providers: [NgbCarouselConfig]

})
export class MyheadComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [250, 160, 175, 26, 3].map((n) => `https://picsum.photos/id/${n}/1500/600`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

}
