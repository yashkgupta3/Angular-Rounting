import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {NoPageComponent} from "./no-page/no-page.component";
import {ChildAboutOneComponent} from "./child-about-one/child-about-one.component";
import {ChildAboutTwoComponent} from "./child-about-two/child-about-two.component";

const routes: Routes = [
  // the point to note that it follows the sequiece form top to down for path matching
  {
    //this ahs the example of child routing
    path:'about',
    component:AboutComponent,
    children:
      [
        {path:'company-one',component:ChildAboutOneComponent},
        {path:'company-two',component:ChildAboutTwoComponent}
      ]
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
