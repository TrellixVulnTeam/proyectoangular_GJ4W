import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyheadComponent } from './myhead/myhead/myhead.component';
import { MynavbarComponent } from './mynavbar/mynavbar/mynavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyheadComponent,
    MynavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
