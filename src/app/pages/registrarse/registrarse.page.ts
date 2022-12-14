import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { pasajero } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  usuario:pasajero[]=[];

  constructor(private database:FirestoreService,private alertCtrl:AlertController,
    private modalCtrl:ModalController, private toastCtrl:ToastController) { 
      this.getUsuarios();
    }

    getUsuarios(){
      this.database.getPasajero().subscribe(respuesta =>{
        console.log(respuesta);
        this.usuario=respuesta;
      });
    }
    async openDetailUsuario(usuario){
      const modal = await this.modalCtrl.create({
        component:ModalPage,
        componentProps:{id:usuario.id},
        breakpoints:[0,0.5,0.8,1],
        initialBreakpoint:1
      });
      modal.present();
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
