import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {

    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      },
      { "imageSize": "contain","imageAutoPlay": true, "imageAutoPlayPauseOnHover": true, "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true },
      { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
      { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 },
      
  ];

  this.galleryImages = [
      {
          small: 'https://www.dl.dropboxusercontent.com/s/47iqcmjvlrozpgi/thumb-kalam.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/n1u1rralekhbrlq/Kalam.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/n1u1rralekhbrlq/Kalam.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/oszy6zch9ih4q6v/thumb-%20Kharsali.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/dslt2di96lagdcn/Kharsali.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/dslt2di96lagdcn/Kharsali.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/hzv49w4x4tocvxe/thumb-devbhoomi.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/vpc1k3jpdsnj20x/devbhoomi.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/vpc1k3jpdsnj20x/devbhoomi.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/hurfmmwmr8dox2w/thumb-moriarty.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/z9gxsch0r9i7g5j/Moriarty.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/z9gxsch0r9i7g5j/Moriarty.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/5u38smzok638bp0/thumb-bean.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/c336v4jysq18n9n/Bean.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/c336v4jysq18n9n/Bean.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/ogz3prr561jljv7/thumb-mail-building.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/hq0br1pvkh8yssy/Main%20Building.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/hq0br1pvkh8yssy/Main%20Building.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/vwaiedvj9z1xmrz/thumb-thomson-interior.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/2ig5mh1ual0hfj9/main%20building%20interior.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/2ig5mh1ual0hfj9/main%20building%20interior.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/juth62pregb2tg0/thumb%20DAP%20IITR.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/4u17yn6cqgf0iyr/DAP%20IITR.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/4u17yn6cqgf0iyr/DAP%20IITR.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/i9scl1lqfbjozuo/thumb-bachha-party.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/xmwasw2smvdz3hk/Bachha%20Party.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/xmwasw2smvdz3hk/Bachha%20Party.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/6h5sb93y87nko49/thumb-chani.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/x2jo1hmmzu7vv99/Chani%20sir%20Assignment.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/x2jo1hmmzu7vv99/Chani%20sir%20Assignment.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/9iowq9ss3bwaky6/thumb-chotu-verma.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/6qekgrai58tlh5y/Chotu-Verma.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/6qekgrai58tlh5y/Chotu-Verma.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/mgrdvfg9l5ndus6/thumb-sir-jj.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/ndar1y8mmhsw7kw/Sir-JJ.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/ndar1y8mmhsw7kw/Sir-JJ.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/h5dgu9l6p6i26ek/thumb-bharani-ji.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/bg1iappax3l7edq/BharaniJi.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/bg1iappax3l7edq/BharaniJi.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/po7vy6dacm489s9/thumb-smriti.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/hg0gg3c3ej9tnlb/Smriti%26Friends.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/hg0gg3c3ej9tnlb/Smriti%26Friends.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/da3e8y33kb82tua/thumb-mukul-archie.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/xdsyxosct81ccke/Mukul-Archi.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/xdsyxosct81ccke/Mukul-Archi.jpg?dl=0'
      },
      {
        small: 'https://www.dl.dropboxusercontent.com/s/jglqhxky9p3cx4p/thumb-chota-party.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/49inb1lhwlgeao5/Chota-Party.jpg?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/49inb1lhwlgeao5/Chota-Party.jpg?dl=0'
      },
      {
        small: 'https://www.dl.dropboxusercontent.com/s/d2bl0dyn1bbyqbf/thumb-dragon-tudu.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/o2asaajrlwnpy3r/Dragon-tudu.jpg?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/o2asaajrlwnpy3r/Dragon-tudu.jpg?dl=0'
      },
      {
        small: 'https://www.dl.dropboxusercontent.com/s/1xtsin8mrhz97h3/thumb-soni-verma.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/i5rgpii5xhmtzwy/Soni-Verma.jpg?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/i5rgpii5xhmtzwy/Soni-Verma.jpg?dl=0'
      },
      {
        small: 'https://www.dl.dropboxusercontent.com/s/o4zokvqnb6sipwz/thumb-%20vaibhav-medhavi.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/l1tb28uwkuwd12t/vaibhav-batla-medhavi.jpg?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/l1tb28uwkuwd12t/vaibhav-batla-medhavi.jpg?dl=0'
      }
  ];

  }

}
