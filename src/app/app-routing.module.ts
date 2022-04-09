import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListofordersComponent } from './listoforders/listoforders.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderdreamcaptureComponent } from './orderdreamcapture/orderdreamcapture.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
                        {path:"login", component:LoginComponent},{path:"orderdream/:id", component:OrderdreamcaptureComponent},
                        {path:"navbar", component : NavbarComponent, children:[{path:"home", component:HomeComponent},
                        {path:"about", component:AboutComponent},
                        {path:"contact", component:ContactComponent},{path:"orderedlist", component:ListofordersComponent},
                        {path:'',redirectTo:'home',pathMatch:'full'}
                        
                        ]}
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
