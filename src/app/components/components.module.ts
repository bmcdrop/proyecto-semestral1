import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { WheaterApiComponent } from "./wheater-api/wheater-api.component";

@NgModule({
    declarations:[
        WheaterApiComponent,
    ],
    imports:[
        CommonModule,
        IonicModule,
        RouterModule
    ],
    exports:[
        WheaterApiComponent
    ],
    providers:[],
})
export class ComponentModule{}