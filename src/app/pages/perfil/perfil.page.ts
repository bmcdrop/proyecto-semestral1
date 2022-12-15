import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { pasajero } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ModalPage } from '../modal/modal.page';
import { Camera, CameraResultType, CameraSource  } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  profile:any=null;
  usuario:pasajero = {
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
    contra: null,
    fotoperfil: null,
    perfil:null
  }
  constructor(
    private database:FirestoreService,private alertCtrl:AlertController,
    private modalCtrl:ModalController, private toastCtrl:ToastController,private auth:AuthService,
    private avatarService:AvatarService, private loadingCtrl:LoadingController,
  ) {
    this.auth.stateUser();
   }

  ngOnInit() {
  }
  async addPasajero(){
    const alert = await this.alertCtrl.create({
      header:'Completar perfil'
      ,
      inputs:[
        {
          name:"name",
          type:"text",
          placeholder:"Primer nombre"
        },
        {
          name:"apellido_paterno",
          type:"text",
          placeholder:"Apellido paterno"
        },
        {
          name:"apellido_materno",
          type:"text",
          placeholder:"Apellido materno"
        },
        {
          name:"rut",
          type:"text",
          placeholder:"Rut"
        },
        {
          name:"edad",
          type:"number",
          placeholder:"edad"
        },
        {
          name:"direccion",
          type:"text",
          placeholder:"Direccion"
        },
        {
          name:"username",
          type:"text",
          placeholder:"Nombre de usuario"
        },
        {
          name:"telefono",
          type:"number",
          placeholder:"Telefono"
        },
        {

          name:"genero",
          type:"text",
          placeholder:"Masculino/Femenino/Prefiero no responder"
        },
        {
          name:"correo",
          type:"text",
          placeholder:"Correo@correo.com"
        },
        {
          name:"perfil",
          type:"text",
          placeholder:"Conductor/Pasajero"
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
            this.database.addPasajero(data);
            this.toastPresent('Datos Actualizados!!!');
          }
        }
      ]
    });
    alert.present();
  }

  async getPasajero(){
    this.database.getPasajeroById(this.usuario.id).subscribe(respuesta =>{
      this.usuario=respuesta;

    });
  }
  loadProfile(){
    this.avatarService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta;
    });
  }
  
  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    console.log(avatar);

    if(avatar){
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const respuesta = await this.avatarService.uploadAvatar(avatar);
      await loading.dismiss();

      if(!respuesta){
        this.alertPresent('Upload failed','There was a problem uploading your avatar.');
      }
      else{
        this.toastPresent('Avatar uploaded!!!');
      }
    }
  }


  async alertPresent(header:string, message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK'],
    });
    await alert.present();
  }



  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    toast.present();
  }

}


