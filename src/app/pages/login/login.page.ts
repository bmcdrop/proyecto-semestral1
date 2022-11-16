import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  
  ngOnInit() {

    this.showLoading();

  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando TeLlevoApp...',
      duration: 3000,
    });

    loading.present();
  }


}
