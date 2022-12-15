import { Injectable } from '@angular/core';
import { Firestore,collection,collectionData,doc,docData,addDoc,updateDoc,deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { pasajero, viaje } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:Firestore) { }

  getPasajero():Observable<pasajero[]>{
    const usuariosRef = collection(this.firestore,'pasajeros');
    return collectionData(usuariosRef, {idField:'id'}) as Observable<pasajero[]>;
  }
  getPasajeroById(id:string):Observable<pasajero>{
    const usuarioRef = doc(this.firestore,`pasajeros/${id}`);
    return docData(usuarioRef, {idField:'id'}) as Observable<pasajero>;
  }
  addPasajero(usuario:pasajero) {
    const usuariosRef = collection(this.firestore,'pasajeros');
    return addDoc(usuariosRef,usuario);
  }

  
  updateUsuario(usuario:pasajero) {
    const usuarioRef = doc(this.firestore, `pasajeros/${usuario.id}`);
    return updateDoc(usuarioRef, 
      {
        name:usuario.name,
        apellido_paterno:usuario.apellido_paterno,
        apellido_materno:usuario.apellido_materno,
        edad:usuario.edad,
        correo:usuario.correo,
        username:usuario.username,
        telefono:usuario.telefono,
        direccion:usuario.direccion,
        fotoperfil:usuario.fotoperfil
      }
    );
  }

  deletePasajero(usuario:pasajero){
    const usuarioRef = doc(this.firestore, `pasajeros/${usuario.id}`);
    return deleteDoc(usuarioRef);
  }

//------------------------------------------ viajes --------------------------------------

getViaje():Observable<viaje[]>{
  const viajeRef = collection(this.firestore,'viajes');
  return collectionData(viajeRef, {idField:'id'}) as Observable<viaje[]>;
}
getViajeById(id:string):Observable<viaje>{
  const viajeRef = doc(this.firestore,`viajes/${id}`);
  return docData(viajeRef, {idField:'id'}) as Observable<viaje>;
}
addViaje(Viaje:viaje) {
  const viajeRef = collection(this.firestore,'viajes');
  return addDoc(viajeRef,Viaje);
}


updateViaje(Viaje:viaje) {
  const viajeRef = doc(this.firestore, `viajes/${Viaje.id}`);
  return updateDoc(viajeRef, 
    {
     capacidad:Viaje.capacidad,
     conductor:Viaje.conductor,
     desde:Viaje.desde,
     hasta:Viaje.hasta,
     patente:Viaje.patente,
     valor:Viaje.valor,
     espacio:Viaje.espacio,
     descripcion:Viaje.descripcion
    }
  );
}

deleteViaje(Viaje:viaje){
  const viajeRef = doc(this.firestore, `viajes/${Viaje.id}`);
  return deleteDoc(viajeRef);
}


}
