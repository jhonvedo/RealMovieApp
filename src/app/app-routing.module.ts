import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate: [ AuthGuardService ]},
  {path:'users',component:UserManagementComponent,canActivate: [ AuthGuardService ]},
  {path:'detail/:id',component:ShowDetailComponent,canActivate: [ AuthGuardService ]},
  {path:'',redirectTo:'/home', pathMatch: 'full'},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
