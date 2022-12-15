import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { viaje } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
})
export class MisViajesPage implements OnInit {
  Viaje:viaje[]=[];
  constructor(private database:FirestoreService, private alertCtrl:AlertController,
    private modalCtrl:ModalController, private toastCtrl:ToastController) { }

  ngOnInit() {
  }


  async addViaje(){
    const alert = await this.alertCtrl.create({
      header:'Agregar viaje',
      inputs:[
        {
          name:"capacidad",
          type:"number",
          placeholder:"Puestos desocupados"
        },
        {
          name:"conductor",
          type:"text",
          placeholder:"Nombre del conductor"
        },
        {
          name:"desde",
          type:"text",
          placeholder:"Lugar de salida"
        },
        {
          name:"hasta",
          type:"text",
          placeholder:"Comuna de llegada"
        },
        {
          name:"patente",
          type:"text",
          placeholder:"La patente de tu vehiculo"
        },
        {
          name:"valor",
          type:"number",
          placeholder:"Valor en pesos chilenos"
        },
        {
          name:"espacio",
          type:"number",
          placeholder:"Asientos en el vehiculo"
        },
        {
          name:"descripcion",
          type:"text",
          placeholder:"Hora y lugar de salida + info adicional(opcional)"
        },
      ],
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Save',
          role:'confirm',
          handler:(data) => {
            this.database.addViaje(data);
            this.toasPresent('Viaje Agregado!!!');
          }
        }
      ]
    });
    alert.present();
  }
  async toasPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    toast.present();
  }
}
