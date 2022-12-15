import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { viaje } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DetalleViajePage } from '../detalle-viaje/detalle-viaje.page';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  Viaje:viaje[]=[];

  constructor(
    private database:FirestoreService,
    private alertCtrl:AlertController,
    private modalCtrl:ModalController,
     private toastCtrl:ToastController
  ) { this.getViaje();
  }
  
  async openDetailViaje(viaje){
    const modal = await this.modalCtrl.create({
      component:DetalleViajePage,
      componentProps:{id:viaje.id},
      breakpoints:[0,0.5,0.8,1],
      initialBreakpoint:1
    });
    modal.present();
  }
  getViaje(){
    this.database.getViaje().subscribe(respuestaa =>{
      console.log(respuestaa);
      this.Viaje=respuestaa;
    });
  }
  ngOnInit() {
  }
  async toasPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    toast.present();
  }

}
