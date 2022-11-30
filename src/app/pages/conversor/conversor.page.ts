import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {
getdata:any[]=[];
  constructor(public _services: ConversorService) {

    this._services.getdata<any[]>("").subscribe(data =>{
      this.getdata=data
      console.log(this.getdata);
    })

   }

  ngOnInit() {
  }

}
