import { Component } from '@angular/core';
import { AlertController,ModalController, ToastController } from '@ionic/angular'
import { Conductor } from 'src/app/services/conductores';
import { ConductoresService } from 'src/app/services/conductores.service';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.page.html',
  styleUrls: ['./formulario-registro.page.scss'],
})
export class FormularioRegistroPage {

  conductores: Conductor[]=[];



  constructor(private conductorService:ConductoresService, private alertCtrl:AlertController,
    private modalCtrl:ModalController,private toastCtrl:ToastController){
      this.getConductores();
    }
    
    getConductores(){
      this.conductorService.getConductores().subscribe(respuesta =>{
        console.log(respuesta);
        this.conductores=respuesta;
      });
    }

  async openDetailConductor(conductor){
    const modal= await this.modalCtrl.create({
      component:ModalPage,
      componentProps:{id:conductor.id},
      breakpoints:[0,0.5,0.8,1],
      initialBreakpoint:1
    });
    modal.present();
  }



  async addConductor(){
    const alert = await this.alertCtrl.create({
    header:'add conductor',
    inputs:[
      {
        name:"name",
        type:"text",
        placeholder:"name"
      },
      {
        name:"paternal_lastname",
        type:"text",
        placeholder:"Apellido Paterno"
      },
      {
        name:"maternal_lastname",
        type:"text",
        placeholder:"Apellido Materno"
      },
      {
        name:"rut",
        type:"text",
        placeholder:"Rut"
      },
      {
        name:"username",
        type:"text",
        placeholder:"Nombre Usuario"
      },
      {
        name:"password",
        type:"text",
        placeholder:"Constraseña"
      },
      {
        name:"dateOfBirth",
        type:"text",
        placeholder:"Fecha Nacimiento"
      },
      {
        name:"age",
        type:"number",
        placeholder:"Edad"
      },
      {
        name:"gender",
        type:"text",
        placeholder:"Genero"
      }


    ],
    buttons:[
      {
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'Guardar',
        role:'confirm',
        handler:(data) => {
          this.conductorService.addConductor(data);
          this.toasPresent('User added!!');
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
