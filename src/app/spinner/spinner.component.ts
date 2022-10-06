import { Component} from '@angular/core';
import { spinnerService } from '../spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent{
  isLoading$ = this.spinnerSvs.isLoading$;
  
  constructor(private spinnerSvs:spinnerService) { }



}
