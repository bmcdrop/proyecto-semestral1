import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { conductor, pasajero } from 'src/app/models/models';
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
    async addPasajeros(){
      const alert = await this.alertCtrl.create({
        header:'Agregar un usuario',
        inputs:[

          {
            name:"name",
            type:"text",
            placeholder:"Nombre"
          },
          {
            name:"apellido_paterno",
            type:"text",
            placeholder:"Apellido Paterno"
          },
          {
            name:"apellido_materno",
            type:"text",
            placeholder:"Apellido Materno"
          },
          {
            name:"rut",
            type:"text",
            placeholder:"Rut"
          },
          {
            name:"edad",
            type:"number",
            placeholder:"Edad"
          },
          {
            name:"direccion",
            type:"text",
            placeholder:"direccion"
          },
          {
            name:"username",
            type:"text",
            placeholder:"Nombre Usuario"
          },
          {
            name:"telefono",
            type:"number",
            placeholder:"Telefono"
          },
          {
            name:"genero",
            type:"text",
            placeholder:"Genero"
          },
          {
            name:"correo",
            type:"text",
            placeholder:"ejemplo@correo.com"
          },
          {
            name:"fotoperfil",
            type:"url",
            placeholder:"Foto Perfil"
          },
          {
            name:"perfil",
            type:"text",
            placeholder:"Conductor/pasajero"
          },
        ],
        buttons:[
          {
            text:'Save',
            role:'Confirm',
            handler:(data)=>{
              this.database.addPasajero(data);
              this.toasPresent('Usuario agregado!!!');
            }

          }
        ]
      });
      alert.present();
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
