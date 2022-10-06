import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bienvenida', url:'/home',icon:'home'},
    { title: 'Sobre', url:'/about',icon:'People'},
    { title: 'Bandeja de entrada', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Bandeja de salida', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archivado', url: '/folder/Archived', icon: 'archive' },
    { title: 'Papelera', url: '/folder/Trash', icon: 'trash' },
    { title: 'Cerrar sesión', url: '/login', icon: 'warning' }
  ];

}
