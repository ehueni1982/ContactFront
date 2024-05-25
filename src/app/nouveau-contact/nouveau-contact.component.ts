import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrl: './nouveau-contact.component.css'
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService:ContactService, public router:Router){}


  ngOnInit() {

  }

  onSaveContact(dataForm?:any){
 this.contactService.saveContact(dataForm)
    .subscribe({
      next: (data:any) =>{
        alert("Voulez-vous créer ce contact?");
        this.router.navigate(['contact']);
        console.log(data);
       },error:(err)=>console.log(err)
      });


  }

}
