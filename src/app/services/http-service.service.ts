import { resaltModel } from './../models/resultModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor(public http:HttpClient) {
  }

  public get(url:string, path:string = '', query:string = ''): Promise<resaltModel> {
    return this.http.get(url+path+query).toPromise() as Promise<resaltModel>;
  }

  public post(url:string, path:string = '', query:string = '', data?:any): Promise<resaltModel> {
    return this.http.post(url+path+query, data).toPromise() as Promise<resaltModel>;
  }

  public put(url:string, path:string = '', query:string = '', data?:any): Promise<resaltModel> {
    return this.http.put(url+path+query, data).toPromise() as Promise<resaltModel>;
  }

  public delete(url:string, path:string = '', query:string = '', data?:any): Promise<resaltModel> {
    return this.http.delete(url+path+query).toPromise() as Promise<resaltModel>;
  }
}
