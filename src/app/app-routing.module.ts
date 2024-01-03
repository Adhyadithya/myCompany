import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { StudentsComponent } from './students/students.component';
import { AddressComponent } from './address/address.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'users',component:UsersComponent},
                        {path:'aboutUs',component:AboutUsComponent},
                        {path:'contactUs',component:ContactComponent,
                      children:[
                        {path:'address',component:AddressComponent},
                        {path:'phone',component:PhoneComponent}
                      ]
                      },
                      {path:'students',component:StudentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
