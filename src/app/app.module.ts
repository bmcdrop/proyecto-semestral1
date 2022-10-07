import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';
import { spinnerModule } from './spinner/spinner.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,spinnerModule],
  providers: [
              { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              {provide: HTTP_INTERCEPTORS,useClass:SpinnerInterceptor, multi:true}
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
