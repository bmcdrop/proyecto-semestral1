import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(public _http:HttpClient) { 



  }

getdata<T>(url: string){

  url = 'https://mindicador.cl/api'
  return this._http.get<T[]>(url);
}




}
