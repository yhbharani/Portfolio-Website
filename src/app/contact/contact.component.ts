import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Name: string='';
  Email: string='';
  Message: string='';
  phone: string='';
  submitted: boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  processForm() {
    alert('Message is Sent'); 

  }

  notAvbl(){
    alert('Form Not Valid !! Please Check the fields');
  }

}
