import { Component } from '@angular/core';
import { WheaterApiComponent } from './components/wheater-api/wheater-api.component';
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
    { title: 'Sobre Nosotros', url:'/sobreNosotros',icon:'happy'},
    { title: 'Clima', url:'/WheaterApiComponent',icon:'sunny'},
    { title: 'Log-out', url:'/login', icon: 'log-out'},
    { title: 'Loading', url:'/loading', icon: 'refresh-circle'},

  ];

}
