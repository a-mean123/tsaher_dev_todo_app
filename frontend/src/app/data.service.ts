import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  url = 'http://127.0.0.1:3000/todo/';

  constructor( private http: HttpClient ) { }



  create( todo: any ){
    return this.http.post( this.url + 'create' , todo );
  }


  all(){
    return this.http.get( this.url + 'all' );
  }

  delete(id: any){
    return this.http.delete( this.url + 'delete/' + id );
  }


  update(id: any){
    return this.http.put(  this.url + 'update/' + id  ,  null );
  }

}
