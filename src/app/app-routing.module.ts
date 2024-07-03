import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { ForgotComponentComponent } from './forgot-component/forgot-component.component';
import { CreateGroupComponent } from './home-page/create-group/create-group/create-group.component';
import { GroupDetailsComponent } from './group-details/group-details.component';

const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'home/:id' , component:HomePageComponent},
  {path:'signup' , component:CreateNewAccountComponent},
  {path:'forgotPassword', component:ForgotComponentComponent},
  {path: 'creategroup', component:CreateGroupComponent},
  {path: 'groupdetails/:groupId', component:GroupDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
