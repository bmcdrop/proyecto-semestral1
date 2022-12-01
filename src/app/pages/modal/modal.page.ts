import { Component, OnInit ,Input} from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Conductor } from 'src/app/services/conductores'; 
import { ConductoresService } from 'src/app/services/conductores.service'; 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input()id :string;
  conductor:Conductor= null;


  constructor(private conductorService:ConductoresService, private modalCtrl:ModalController,
    private toastCtrl:ToastController,private alertCtrl:AlertController) { }

  ngOnInit() {
    this.getConductor();;
  }
  getConductor(){
    this.conductorService.getConductoresById(this.id).subscribe(respuesta =>{
      this.conductor=respuesta;
    });
  }

  async updateConductor(){
    this.conductorService.updateConductor(this.conductor);
    this.modalCtrl.dismiss();
    this.toasPresent('User updated!!!');
  }

  async deleteConductor(){
    const alert= await this.alertCtrl.create({
      header:'Mensajes',
      message:'Estas seguro que deseas eliminar Conductor?',
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Confirm',
          role:'confirm',
          handler:()=>{
            this.conductorService.deleteConductor(this.conductor);
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
