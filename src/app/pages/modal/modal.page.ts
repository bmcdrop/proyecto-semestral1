import { Component, OnInit,Input } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { pasajero } from 'src/app/models/models';
import { AlertController, ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() id:string;
  usuario:pasajero={
    id:null,
    name: null,
    apellido_paterno: null,
    apellido_materno: null,
    rut: null,
    edad: null,
    direccion: null,
    username: null,
    telefono: null,
    genero: null,
    correo: null,
    password: null,
    fotoperfil: null,
    perfil:null,



  }

  constructor(private database:FirestoreService, private toastCtrl:ToastController, private alertCtrl:AlertController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.getPasajero();
  }
  
  getPasajero(){
    this.database.getPasajeroById(this.id).subscribe(respuesta =>{
      this.usuario=respuesta;
    });
  }
  async updatePasajero(){
    this.database.updateUsuario(this.usuario);
    this.modalCtrl.dismiss();
    this.toasPresent('User updated!!!');
  }

  async deletePasajero(){
    const alert=await this.alertCtrl.create({
      header:'Mensajes',
      message:'Estas seguro que deseas eliminar al usuario?',
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Confirm',
          role:'confirm',
          handler:() => {
            this.database.deletePasajero(this.usuario);
            this.modalCtrl.dismiss();
            this.toasPresent('User deleted!!!');
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
