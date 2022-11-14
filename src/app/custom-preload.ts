import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";


@Injectable()
export class CustomPreloadStrategy implements PreloadingStrategy{

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        
        console.log(route);
        return load();
    }

}