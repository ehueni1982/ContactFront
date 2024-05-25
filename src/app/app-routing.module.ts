import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import  {ContactComponent} from './contact/contact.component'
import { NewContactsComponent } from './new-contacts/new-contacts.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [ {path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'new-contacts',component:NewContactsComponent},
{path:'nouveau-contact',component:NouveauContactComponent},
{path:'edit-contact/:id',component:EditContactComponent},
{path:'',redirectTo:'/about',pathMatch:'full'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
