import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyheadComponent } from './myhead/myhead/myhead.component';

import { MyaboutComponent } from './myabout/myabout/myabout.component';

import { MypagenotfoundComponent } from './mypagenotfound/mypagenotfound/mypagenotfound.component';
import { MyindexComponent } from './myindex/myindex/myindex.component';
import { MyfooterComponent } from './myfooter/myfooter/myfooter.component';
import { MynavbarComponent } from './mynavbar/mynavbar/mynavbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MyloginComponent } from './mylogin/mylogin/mylogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MymenulogedComponent } from './mymenuloged/mymenuloged/mymenuloged.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyproductComponent } from './myproducts/myproduct/myproduct.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    
    AppComponent,
    MyheadComponent,
    MypagenotfoundComponent,
    MyindexComponent,
    MyfooterComponent,
    MynavbarComponent,
    MyaboutComponent,
    MyloginComponent,
    MymenulogedComponent,
    MyproductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
