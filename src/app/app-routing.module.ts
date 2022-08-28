import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {NoPageComponent} from "./no-page/no-page.component";

const routes: Routes = [
  // the point to note that it follows the sequiece form top to down for path matching
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'**',
    component:NoPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
