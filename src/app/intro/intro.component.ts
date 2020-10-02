import { Component, OnInit } from '@angular/core';
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
  }

}
