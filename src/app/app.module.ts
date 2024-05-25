import { ContentChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {ContactComponent} from './contact/contact.component'
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { FormsModule } from '@angular/forms';
import { NewContactsComponent } from './new-contacts/new-contacts.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    NewContactsComponent,
    NouveauContactComponent,
    EditContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent,ContactComponent,AboutComponent,NewContactsComponent,NouveauContactComponent,EditContactComponent]
})
export class AppModule { }
