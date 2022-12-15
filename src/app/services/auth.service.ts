import { Injectable} from "@angular/core";
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged} from '@angular/fire/auth';
import { AlertController } from "@ionic/angular";
import { BehaviorSubject, Observable } from "rxjs";




@Injectable({
    providedIn:'root'
})
export class AuthService{
    private loggedIn = new BehaviorSubject<boolean>(false);
    loginn:boolean=false;
    constructor(private auth:Auth,private alertController:AlertController){}

    get isLogged(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }


    async login(email:string,password:string){
        try {
            const user= await signInWithEmailAndPassword(this.auth,email,password);
            return user;
            this.loggedIn.next(true);
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
        this.loggedIn.next(false);
    }
}
