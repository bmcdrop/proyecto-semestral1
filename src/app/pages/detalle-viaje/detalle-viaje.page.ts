import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { viaje } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.page.html',
  styleUrls: ['./detalle-viaje.page.scss'],
})
export class DetalleViajePage implements OnInit {
  @Input() id:string;
  Viaje:viaje={
    id:null,
    capacidad:null,
    conductor:null,
    desde:null,
    hasta:null,
    patente:null,
    valor:null,
    espacio:null,
    descripcion:null

  };
  constructor(private database:FirestoreService, private toastCtrl:ToastController, private alertCtrl:AlertController, private modalCtrl: ModalController) 
  {
    
   }
   getViaje(){
    this.database.getViajeById(this.id).subscribe(respuesta =>{
      this.Viaje=respuesta;

    });
  }
  ngOnInit() {
    this.getViaje();
  }
  async toasPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    toast.present();
  }
}
