import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bienvenida', url:'/home',icon:'home'},
    { title: 'Socios', url:'/about',icon:'People'},
    { title: 'Conversor', url: '/conversor', icon: 'cash' },
    { title: 'Registro Conductores', url: '/formulario-registro', icon: 'car' },
    { title: 'Log-out', url:'/login', icon: 'log-out'},
    { title: 'Loading', url:'/loading', icon: 'refresh-circle'},

  ];

}
