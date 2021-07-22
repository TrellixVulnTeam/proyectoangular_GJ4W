import { Component, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appElcato';
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
  showmenu1!: boolean;
  showmenu2!: boolean;
  showmenu3!: boolean;
  showmenu4!: boolean;

  
  constructor(private titleService: Title, private meta: Meta, private observer: BreakpointObserver){
    titleService.setTitle('ElCato Market Digital');
    meta.updateTag({name:'viewport', content:'width=device-width, initial-scale=1, shrink-to-fit=no'});
    meta.addTag({name:'description', content:'Aplicación utilziada para la asignatura de Desarrollo de Frontend con Angular'}, true);
    meta.addTag({name:'author', content:'Integrantes: Nicolás Espinoza, Benjamín Nuñez, Esteban Salas'}, true);

  }
  ngOnInit(): void {
    this.showmenu1=false;
    this.showmenu2=false;
    this.showmenu3=false;
    this.showmenu4=false;
   }
  ngAfterViewInit() {
    this.sidenav.mode='over';
  }
  toggleMenu1() {
    this.showmenu1= !this.showmenu1;
 }
 toggleMenu2() {
  this.showmenu2 = !this.showmenu2;
}
toggleMenu3() {
  this.showmenu3 = !this.showmenu3;
}
toggleMenu4() {
  this.showmenu4 = !this.showmenu4;
}

}
