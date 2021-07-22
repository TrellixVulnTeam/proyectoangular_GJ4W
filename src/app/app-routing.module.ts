import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyaboutComponent } from './myabout/myabout/myabout.component';
import { MyheadComponent } from './myhead/myhead/myhead.component';
import { MyindexComponent } from './myindex/myindex/myindex.component';
import { MyloginComponent } from './mylogin/mylogin/mylogin.component';

const routes: Routes = [

  {
    path:'about',
    component: MyaboutComponent
  },
  {
    path:'login',
    component: MyloginComponent,
  },
  {
    path:'',
    component: MyheadComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
