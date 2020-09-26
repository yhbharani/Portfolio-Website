import { Component, OnInit } from '@angular/core';
import  Typed  from 'typed.js';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations:[
    trigger('fadeIn',[
      transition('void => *',[
        style({ opacity: 0}),
        animate(1000)
      ])
    ])
  ] 
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['& I am:',
        '& I am: <span style="color: #e91e63"> An </span> Architect', 
        '& I am: <span style="color: #e91e63"> A </span> Motion Designer ', 
        '& I am: <span style="color: #e91e63"> A </span> UI/UX Designer',
        '& I am: <span style="color: #e91e63"> A </span> Web Designer',
        '& I am: <span style="color: #e91e63"> A </span> Web Developer',
        '& I am: <span style="color: #e91e63"> An </span> Artist.' ,
      ],
      typeSpeed: 120,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '|',
      loop: false
 };
 
 const typed = new Typed('.typed-element', options);
  }

}
