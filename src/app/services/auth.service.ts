import { Injectable} from "@angular/core";
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import { conductor } from "../models/models";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn:'root'
})
export class AuthService{

    constructor(private auth:Auth,private authfirebase:AngularFireAuth){}

    async register(datos:conductor){
        try{
           return this.authfirebase.createUserWithEmailAndPassword(datos.correo,datos.password);
            
        } catch (error){
            return null;
        }
    }

    async login(email:string,password:string){
        try {
            const user= await signInWithEmailAndPassword(this.auth,email,password);
            return user;
        } catch (error){
            return null;
        }

    }


    logout(){
        return signOut(this.auth);
    }
}
