import { Component } from '@angular/core';
import { WheaterApiComponent } from './components/wheater-api/wheater-api.component';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  

})
export class AppComponent {

  


  constructor(private authentication:AuthService){

    this.authentication.stateUser();
  }
  public appPages = [
    { title: 'Bienvenida', url:'/home',icon:'home'},
    { title: 'Socios', url:'/about',icon:'People'},
    { title: 'Mis viajes', url:'/mis-viajes', icon:'car'},
    { title: 'Viajes', url:'/viajes', icon:'navigate'},
    { title: 'Conversor', url: '/conversor', icon: 'cash' },
    { title: 'Perfil', url: '/perfil', icon: 'person' },
    { title: 'Sobre Nosotros', url:'/sobre-nosotros',icon:'happy'},
    { title: 'Log-out', url:'/login', icon: 'log-out'},

  ];

}
