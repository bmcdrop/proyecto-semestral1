import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  pageTitle ='Ingenieros';
  
  listaIngenieros:any =[
    {
      id:1,
      name: 'Bruno Jimenez',
      homeworld:'Jefe de proyectos',
      foto:'https://pbs.twimg.com/media/FeVm4HjXEAY_qEz?format=png&name=small',
      descripcion:'Desarrollador full Stack, especialista en desarrollo de aplicaciones moviles, gestión de proyectos y base de datos.',
      instagram:'https://www.instagram.com/bmc_drop/?hl=es-la',
    },
    {
      id:2,
      name:'Matias Saldivia',
      homeworld:'Jefe de proyectos',
      foto:'https://pbs.twimg.com/media/FeVm4HjXgAA3MMb?format=jpg&name=large',
      descripcion:'Desarrollador full Stack, especialista en desarrollo de paginas web, gestión agil de proyectos.',
      instagram:'https://www.instagram.com/mob._ss/?hl=es-la',
    },
    {
      id:3,
      name:'Tony Stark',
      homeworld:'Diseñador grafico',
      foto:'https://assets.puzzlefactory.pl/puzzle/387/881/original.webp',
      descripcion:'Desarrollador full Stack, especialista en desarrollo de paginas web, gestión agil de proyectos.',
      instagram:'https://www.instagram.com/mob._ss/?hl=es-la',
    },
    {
      id:4,
      name:'Natasha Romanoff',
      homeworld:'Programadora',
      foto:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Scarlett_Johansson_as_Black_Widow.jpg/220px-Scarlett_Johansson_as_Black_Widow.jpg',
      descripcion:'Desarrollador full Stack, especialista en desarrollo de paginas web, gestión agil de proyectos y prostituto.',
      instagram:'https://www.instagram.com/mob._ss/?hl=es-la',
    }
    
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToDetail(ingeniero:any) :void {
    const navigationExtras: NavigationExtras = {
      queryParams : {
        ingeniero: JSON.stringify(ingeniero)
      }
    };
    this.navCtrl.navigateForward(['detalle-ingeniero/'],navigationExtras);
  }

  
}
