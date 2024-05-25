import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ActivatedRoute, Data, Route, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit {

  mode:number=1;
  contact:Contact= new Contact();
  idContact:number;

  constructor(activatedRoute:ActivatedRoute, public contactService:ContactService,
          public router:Router){
  //Test
    //console.log(activatedRoute.snapshot.params['id']);
    //Instanciation du composant
    this.idContact=activatedRoute.snapshot.params['id'];

  }

    ngOnInit() {
      this.contactService.getContact(this.idContact)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.contact = data;
        }, error: (err) => console.log(err)
      });





    }

  updateContact(){
    this.contactService.updateContact(this.contact)
    .subscribe({
      next: (data: any) => {
        alert("mise à jour effectuée");
        this.router.navigate(['contact']);
        console.log(data);
      }, error: err => {
        console.log(err);
        alert("Problème");
      }
    });
  }

}
