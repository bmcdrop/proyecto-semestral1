import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { Capacitor } from '@capacitor/core';
import { getAuth, indexedDBLocalPersistence, initializeAuth } from '@firebase/auth';
import { provideAuth} from '@angular/fire/auth';
import { provideFirebaseApp} from '@angular/fire/app';
import { provideFirestore, getFirestore} from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { getApp } from 'firebase/app';
import { WheaterApiComponent } from './components/wheater-api/wheater-api.component';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,
    provideFirebaseApp(()=> initializeApp(environment.firebase)),
    provideAuth(()=>{
      if(Capacitor.isNativePlatform()){
        return initializeAuth(getApp(),{
          persistence:indexedDBLocalPersistence,
        });
      }
      else{
        return getAuth();
      }
    }),
    provideFirestore(()=> getFirestore()),
    provideStorage(()=>getStorage()),

  ],
  providers: [
              { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
