import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController,IonButton, ToastController, ModalController } from '@ionic/angular';
import { stringify } from 'querystring';
import { AuthService} from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserService } from 'src/app/services/user.service';
import { ModalRegisterPage } from '../modal-register/modal-register.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials!:FormGroup;

  constructor(
    private loadingCtrl: LoadingController,
    private formBuilder:FormBuilder,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private database:FirestoreService,
    private router: Router,
    private toastCtrl:ToastController,
    private usuario:UserService,
    private fire:FirestoreService,
    private modalCtrl:ModalController
    ) { }

  
  ngOnInit() {

    this.showLoading();
    this.createForm();

  }





  get email(){
    return this.credentials?.get('correo');
  }

  get password(){
    return this.credentials?.get('password')
  }
  async openRegisterUser(){
    const modal = await this.modalCtrl.create({
      component:ModalRegisterPage,
      breakpoints:[0,0.5,0.8,1],
      initialBreakpoint:1
    });
    modal.present();
  }



  createForm(){
    this.credentials = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],

    })
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando TeLlevoApp...',
      duration: 1500,
    });

    loading.present();
  }
  async register(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.authService.registrarUser(this.credentials.value.email,this.credentials.value.password);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home');
    }
    else{
      this.alertPresent('Registro fallido','Revise bien los datos ingresado e inténtelo nuevamente más rato...');
    }
  }
  


async login(){
  const loading = await this.loadingCtrl.create();
  
  const user = await this.authService.login(this.credentials.value.email,this.credentials.value.password);
  
  if(user){
    this.router.navigateByUrl('/home');
  }
  else{
    this.alertPresent('Ingreso fallido','Revise bien los datos ingresados e intentelo denuevo...');
  }


}
  async alertPresent(header:string,message:string){
  const alert = await this.alertCtrl.create({
    header:header,
    message:message,
    buttons:['OK']
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
logout(){
  this.authService.logout();
}

}
