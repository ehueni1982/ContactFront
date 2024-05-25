import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrl: './nouveau-contact.component.css'
})
export class NouveauContactComponent implements OnInit {


  constructor(public contactService:ContactService){}


  ngOnInit(): void {

  }

  onSaveContact(dataForm?:any){
 this.contactService.saveContact(dataForm)
    .subscribe({
      next: (data:any) =>{
        console.log(data);
       },error:(err?:any)=>console.log(err)
      });


  }

}
