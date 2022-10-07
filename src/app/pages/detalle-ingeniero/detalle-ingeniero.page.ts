import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-ingeniero',
  templateUrl: './detalle-ingeniero.page.html',
  styleUrls: ['./detalle-ingeniero.page.scss'],
})
export class DetalleIngenieroPage implements OnInit {

  pageTitle: string = ''
  ingeniero:any=null;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.obtenerIngeniero();
  }
  ngOnInit() {
    console.log(this.ingeniero);
    this.pageTitle=this.ingeniero.name
  }
  obtenerIngeniero():void{
    this.activatedRoute.queryParams.subscribe(params => {
      this.ingeniero = JSON.parse(params.ingeniero);
    })
  }

}
