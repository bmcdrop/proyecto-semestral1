import { Component, OnInit } from '@angular/core';
import { AnyARecord } from 'dns';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {
  listadoIndicadores: any;
  euro: number;
  dolar: number;
  pesoAeuro: number;
  pesoAdolar: number;
  value: number = 0;
  
  getdata:any[]=[];
    constructor(public conversor: ConversorService) {
      this.mostrarValores();
      this.getEuroApesoChileno();
      this.getDolarApesoChileno();
    }

    mostrarValores(){
      this.conversor.buscarIndicadores().then(data=>{
        this.listadoIndicadores = data;
      });
    }

    getEuroApesoChileno() {
      this.conversor.buscarIndicador('euro', '4-11-2022').then(data => {
        this.euro = data.serie[0].valor;
        console.log(this.euro);
      });
    }
  
    getDolarApesoChileno() {
      this.conversor.buscarIndicador('dolar', '4-11-2022').then(data => {
        this.dolar = data.serie[0].valor;
        console.log(this.dolar);
      });
    }
  
    calcular(){
      this.pesoAeuro = this.value * this.euro;
      console.log(this.pesoAeuro);
      this.pesoAdolar = this.value * this.dolar;
      console.log(this.pesoAdolar);
    }

    ngOnInit() {
    }

  }
