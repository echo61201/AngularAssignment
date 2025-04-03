import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn:'root'
})
export class ApiService {
    private API_URL = 'https://dummyjson.com/products';

    constructor(private http:HttpClient){}

    //return an observable for item.component.ts for easier processing 
    //like map,filter from RxJS
    getData(): Observable<any>{
        return this.http.get<any>(this.API_URL);
    }

    getDataById(id:string | null):Observable<any> {
        const url = `https://dummyjson.com/products/${id}`;
        return this.http.get<any>(url);
    }
}