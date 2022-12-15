import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

    url = 'https://mindicador.cl/api';
  
    constructor(private httpClient: HttpClient) { }
  
    controlador($scope, $http) {
      $http.get(this.url).success(function(data) {
          $scope.dailyIndicators = data;
      }).error(function() {
          console.log('Ah ocurrido un error al querer ocupar la API :c');
      });
    }
  
    buscarIndicadores(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.httpClient.get(this.url).subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }
  
    buscarIndicador(indicador: string , fecha: any): Promise<any> {
      return new Promise((resolve, reject) => {
        this.httpClient.get(this.url + '/' + indicador + '/' + fecha).subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }




}
