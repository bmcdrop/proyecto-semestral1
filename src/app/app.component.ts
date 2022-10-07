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
    { title: 'Bandeja de entrada', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Bandeja de salida', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Cerrar sesión', url: '/login', icon: 'warning' }
  ];

}
