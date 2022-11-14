import { Injectable } from "@angular/core";
import { resolve } from "dns";

@Injectable()

export class DelayService{

    load(): Promise<void>{
        return new Promise(resolve => setTimeout(resolve, 5000000000))

    }



}