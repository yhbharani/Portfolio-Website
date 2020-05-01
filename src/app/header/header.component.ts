import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[
    trigger('pull',[
      transition('void => *',[
        style({ transform: 'translateX(130%)' }),
        animate('0.4s ease-in')
      ]),
      transition('* => void',[
        animate('0.4s ease-out', style({ transform: 'translateX(130%)' }))
      ])
    ])
  ] 
})
export class HeaderComponent implements OnInit {

  drop: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.drop=!this.drop;
  }

}
