import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';


@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
 pageContacts:any;
 motCle:string="";
 currentPage:number=0;
 size:number=5;
contact:Contact=new Contact();
 pages?: Array<number> | undefined;

public data: Array<any> = [];

  constructor( public contactService:ContactService,
              public router:Router){  }

  ngOnInit(){

  }

  doSearch(){
    this.contactService.getContacts(this.motCle,this.currentPage,this.size)
          .subscribe({
            next: (data: any) => {
              console.log(data);
              this.pageContacts = data;
              this.pages=new Array(data.totalPages);
            }, error: (err) => console.log(err)
          });
  }

  chercher(){
    this.doSearch();
  }

  gotoPage(i:number){
  this.currentPage=i;
  this.doSearch();
  }

  onEditContact(id:number){
    this.router.navigate(['edit-contact',id]);
  }


  onDeleteContact(c:Contact){
    let confirm=window.confirm('Êtes vous sûr(e) de poursuivre cette action?');
    if(confirm==true){
      this.contactService.deleteContact(c.id)
    .subscribe({
      next: (data: any) => {
        this.pageContacts.content.splice(
          this.pageContacts.content.indexOf(c),1);
         console.log(data);

      }, error: (err) =>{console.log(err)}
    });
    }
  }
}
