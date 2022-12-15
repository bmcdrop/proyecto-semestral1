import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { pasajero } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.page.html',
  styleUrls: ['./modal-register.page.scss'],
})
export class ModalRegisterPage implements OnInit {
  @Input() id:string;
  credentials!: FormGroup;

  datos:pasajero={
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
    perfil:null,
  }

  constructor(
    private database:FirestoreService,private alertCtrl:AlertController,
    private modalCtrl:ModalController, private toastCtrl:ToastController,
    private formBuilder:FormBuilder
  
  ) { }

  ngOnInit() {
    this.createForm();
  }
  get email(){
    return this.credentials?.get('email');
  }

  get password(){
    return this.credentials?.get('password');
  }
  createForm(){
    this.credentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  async openRegisterUser(){
    const modal = await this.modalCtrl.create({
      component:ModalRegisterPage,
      breakpoints:[0,0.5,0.8,1],
      initialBreakpoint:1
    });
    modal.present();
  }

  registrar(){
    console.log('datos =>',this.datos)
  }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons: ['OK']
    });
    alert.present();
  }

}
