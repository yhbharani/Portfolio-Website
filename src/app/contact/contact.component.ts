import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Name: string='';
  Email: string='';
  Message: string='';
  phone: number;
  form: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

  processForm() {
    const allInfo = `My name is ${this.Name}. My email is ${this.Email}.Phone No: ${this.phone}. My message is ${this.Message}`;
    alert('Message is currently Disabled :( ........................ Please Email me at yash.h.bharani@gmail.com'); 
  }

  notValid(){
    alert('Form Not Valid !! Please Check the fields')
  }

}
