import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';

const routes: Routes = [{path:'addcourse', component:AddcourseComponent},
{path:'viewcourse',component:ViewcourseComponent},{
  path:'navbar',component:NavbarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
