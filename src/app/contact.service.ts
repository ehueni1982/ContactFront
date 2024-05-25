import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/contact.model';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  httpClient = inject(HttpClient);

  constructor() { }

  getContacts(motCle:string, page:number,size:number) {

    return this.httpClient.get("http://localhost:8080/cherchercontact?mc="+motCle+"&size="+size+"&page="+page);

    }

  getContact(id:number) {

    return this.httpClient.get("http://localhost:8080/contacts/"+id)

    }

    saveContact(contact:Contact){
    return this.httpClient.post("http://localhost:8080/contact",contact);


  }

  updateContact(contact:Contact){
    return this.httpClient.put("http://localhost:8080/contacter/"+contact.id,contact);

  }

  deleteContact(id:number){
    return this.httpClient.delete("http://localhost:8080/contact/"+id);

  }





}
