import { Injectable} from "@angular/core";
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged} from '@angular/fire/auth';
import { AlertController } from "@ionic/angular";



@Injectable({
    providedIn:'root'
})
export class AuthService{
    loginn:boolean=false;
    constructor(private auth:Auth,private alertController:AlertController){}



    async login(email:string,password:string){
        try {
            const user= await signInWithEmailAndPassword(this.auth,email,password);
            return user;
        } catch (error){
            return null;
        }

    }

   async registrarUser(email:string,password:string){
        try{
            const user = await createUserWithEmailAndPassword(this.auth,email,password);
            return user;
        }catch(error){
            return null;
        }
    }


    stateUser(){
       onAuthStateChanged(this.auth,(data)=>{
        if(data){
            console.log('logueado',data.uid,data.email)
            this.loginn = true;
        }else{
            console.log('no esta logueado')
            this.loginn = false;
        }
       })
    }



    logout(){
        return signOut(this.auth);
    }
}
