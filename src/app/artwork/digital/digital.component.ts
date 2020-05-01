import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  index:number=1;
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
      {
        "imageDescription":true,
        "thumbnailsMoveSize": 4,
        "previewCloseOnClick": true, 
        "imageSize": "contain",
        "imageAutoPlay": true, 
        "imageAutoPlayPauseOnHover": true, 
        "previewAutoPlay": true, 
        "previewAutoPlayPauseOnHover": true, 
      },
      { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
      { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 },
      
  ];

  this.galleryImages = [
      {
          small: 'https://www.dl.dropboxusercontent.com/s/u8oos9mglps8ctm/DAP%20Artwork_tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/f7sf5r2ar8jbnpy/DAP%20Artwork.png?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/f7sf5r2ar8jbnpy/DAP%20Artwork.png?dl=0',
      },  
      {
          small: 'https://www.dl.dropboxusercontent.com/s/v7mx03f028lcezj/Aasli%20Rajput_tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/mplbpjzbxs8anb1/Aasli%20Rajput.png?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/mplbpjzbxs8anb1/Aasli%20Rajput.png?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/h95dt3q21vyy3cz/Freshman%20Comic%201_tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/3huvat9gd29w3iu/Freshman%20Comic%201.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/3huvat9gd29w3iu/Freshman%20Comic%201.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/eekzaie4b25v4zw/Freshman%20Comic%202_tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/31webk9l0aphp4x/Freshman%20Comic%202.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/31webk9l0aphp4x/Freshman%20Comic%202.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/vgw3n0j76ebopsy/WONAIllustration%20_tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/owigpjcvb8rghph/WONAIllustration%20.png?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/owigpjcvb8rghph/WONAIllustration%20.png?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/ga0uwj58izr6u1w/Freshman%20Cover_tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/2w327mzkolw1ens/Freshman%20Cover.png?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/2w327mzkolw1ens/Freshman%20Cover.png?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/rlth6l9gt67ug8r/Hourglass_tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/wdpouxphngd62yh/Hourglass.png?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/wdpouxphngd62yh/Hourglass.png?dl=0'
      },
      {
        small: 'https://www.dl.dropboxusercontent.com/s/hx48pc1g0jcsejn/title_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/z0f89mos35ylw87/title.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/z0f89mos35ylw87/title.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/yqt0v64bveix52j/arches_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/hlajuhmqfc8npc4/arches.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/hlajuhmqfc8npc4/arches.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/j5xb0ata66tenlb/Ceiling_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/geduylcggnmje2e/Ceiling.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/geduylcggnmje2e/Ceiling.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/5udf95a1anqfwiy/Central_Atrium_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/s3ooez2lzu07t94/Central_Atrium.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/s3ooez2lzu07t94/Central_Atrium.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/75gnx7wvcljb2kg/Clearstory__tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/9oclxnss6ic22uw/Clearstory_.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/9oclxnss6ic22uw/Clearstory_.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/3iasaxvw6dckhps/Conclusion_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/phgw4w0wg2lkv6w/Conclusion.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/phgw4w0wg2lkv6w/Conclusion.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/vxtyzgeclgxi324/Courtyard__tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/u697jaon5pv3qu5/Courtyard_.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/u697jaon5pv3qu5/Courtyard_.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/pek7l2daft2yuqf/Hostel_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/wd5cjh4z03nnpeg/Hostel.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/wd5cjh4z03nnpeg/Hostel.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/5rm7v3ser94d1ul/Member_Conference__tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/gs83xuaysxhh0bx/Member_Conference_.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/gs83xuaysxhh0bx/Member_Conference_.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/t1pi1rsbnvyaa33/Octagon_Grass_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/t08r5mtkyu79s3f/Octagon_Grass.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/t08r5mtkyu79s3f/Octagon_Grass.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/4dekil4guioy42l/Principal_Office_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/s4mu1pevvxy4c9c/Principal_Office.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/s4mu1pevvxy4c9c/Principal_Office.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/ub0rrii4txyokd2/Side_Arch_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/v8mlgpwj5qot9sj/Side_Arch.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/v8mlgpwj5qot9sj/Side_Arch.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/fuythpv2mtvlft4/Staircase_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/3qyr65v6mferof3/Staircase.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/3qyr65v6mferof3/Staircase.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/egbh1by4nb3vgic/Untitled_Artwork_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/q5x494mf73h9qqo/Untitled_Artwork.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/q5x494mf73h9qqo/Untitled_Artwork.png?dl=0'
    },
    {
        small: 'https://www.dl.dropboxusercontent.com/s/kjy708o69f2bxmj/Window_Back_tn.jpg?dl=0',
        medium: 'https://www.dl.dropboxusercontent.com/s/bcff2mrdzy1l148/Window_Back.png?dl=0',
        big: 'https://www.dl.dropboxusercontent.com/s/bcff2mrdzy1l148/Window_Back.png?dl=0'
    },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/vdlo6qiizhm7sef/IMG%20Locker_tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/i9686w7wct22hf4/IMG%20Locker.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/i9686w7wct22hf4/IMG%20Locker.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/4hgiy4ngvn35x14/JL-tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/uil2p3nee3jv244/JL%20%281%29.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/uil2p3nee3jv244/JL%20%281%29.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/4tdg5uuggmvwl9i/Swimming-tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/ff4qsvhw4sq0ynj/swim.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/ff4qsvhw4sq0ynj/swim.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/ozixqfpj2cyvl34/swim%20tee%20tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/w1i1ijpjwnyzrly/swim%20tee.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/w1i1ijpjwnyzrly/swim%20tee.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/46npxk6nj3udw40/Myself_tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/hp2btqzohgb1hb3/Myself.jpg?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/hp2btqzohgb1hb3/Myself.jpg?dl=0'
      },
      {
          small: 'https://www.dl.dropboxusercontent.com/s/mw31q5m2w3jw27r/wona%20farewell%20fb%20cover-small_tn.jpg?dl=0',
          medium: 'https://www.dl.dropboxusercontent.com/s/msh8d3dlu86bhsp/wona%20farewell%20fb%20cover-small.png?dl=0',
          big: 'https://www.dl.dropboxusercontent.com/s/msh8d3dlu86bhsp/wona%20farewell%20fb%20cover-small.png?dl=0'
      },
      
     
  ];

  $(".vpop").on('click', function(e) {
    e.preventDefault();
    $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
    
    var srchref='',autoplay='',id=$(this).data('id');
    if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
    else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";
    
    if($(this).data('autoplay') == true) autoplay = '?autoplay=1';
    
    $("#video-popup-iframe").attr('src', srchref+id+autoplay);
    
    $("#video-popup-iframe").on('load', function() {
      $("#video-popup-container").show();
    });
  });
  
  $("#video-popup-close, #video-popup-overlay").on('click', function(e) {
    $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
    $("#video-popup-iframe").attr('src', '');
  });


  }
}
