import { Component, OnInit, afterNextRender} from '@angular/core';
import { Contact } from '../models/contact.model';

import { ContactService } from '../contact.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-new-contacts',
  templateUrl: './new-contacts.component.html',
  styleUrl: './new-contacts.component.css'
})


export class NewContactsComponent implements OnInit{

contact:Contact=new Contact();
mode:number=1;

constructor(public contactService:ContactService){}


ngOnInit(): void {

}

  saveContact(){
    this.contactService.saveContact(this.contact)
    .subscribe({
     next: (data:any) =>{
      this.contact=data;
      this.mode=2
      console.log(data);
     },error:(err?:any)=>console.log(err)
    });
  }




}




