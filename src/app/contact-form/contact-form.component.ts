import { Component, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
  ]

  log(value){
    console.log(value);
  }

  submit(form){
    console.log(form.value);
  }
}
