import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bharani';
  ngOnInit() :void {

    var scrollLink = $('.scroll');
  
    // Smooth scrolling
    scrollLink.click(function(eve) {
    });
 
    // Active link switching  

    $(window).scroll(function() {
      
      var scrollbarLocation = $(this).scrollTop();
      scrollLink.each(function() {
    
        var sectionOffset = $(this.hash).offset().top-10;
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      
      })
  
    })
   
  
  }
}
