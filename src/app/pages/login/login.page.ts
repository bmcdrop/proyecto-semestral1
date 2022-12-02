import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController,IonButton } from '@ionic/angular';
import { AuthService} from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials!:FormGroup;

  constructor(private loadingCtrl: LoadingController,
    private formBuilder:FormBuilder,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,) { }

  
  ngOnInit() {

    this.showLoading();
    this.createForm();

  }

  get email(){
    return this.credentials?.get('email');
  }

  get password(){
    return this.credentials?.get('password')
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
    const user = await this.authService.register(this.credentials.value.email,this.credentials.value.password)
    await loading.dismiss();

  }

  if(user){
    this.router.navigateByUrl('/home');
  }
  else(){
    this.alertPresent('Registro fallido','revise bien los datos ingresados e intentelo nuevamente');
  }

async login(){
  const loading = await this.loadingCtrl.create();
  //await loading.present();
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

}
