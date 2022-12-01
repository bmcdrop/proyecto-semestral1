import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc, collectionData, docData,deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Conductor } from './conductores';

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  constructor(private firestore:Firestore) { }


  getConductores():Observable<Conductor[]>{
    const ConductorRef = collection(this.firestore,'conductor');
    return collectionData(ConductorRef,{idField:'id'}) as Observable<Conductor[]>;

  }
  getConductoresById(id:string):Observable<Conductor>{
    const ConductorRef= doc(this.firestore,`conductor/${id}`);
    return docData(ConductorRef,{idField:'id'}) as Observable<Conductor>;
  }
  updateConductor(conductor:Conductor){
    const ConductorRef=doc(this.firestore,`conductor/${conductor.id}`);
    return updateDoc(ConductorRef,
      {
        username:conductor.username,
        email:conductor.email,
        password:conductor.password
      }
      
      
      
      );
  }

  
  addConductor(conductor: Conductor){
    const ConductorRef = collection(this.firestore,'conductor');
    return addDoc(ConductorRef,conductor);
  }
  
  
  deleteConductor(conductor:Conductor){
    const ConductorRef=doc(this.firestore,`conductor/${conductor.id}`);
    return deleteDoc(ConductorRef);
  }


}
