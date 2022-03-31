import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DreamcatcherService {
  
 private apiUrl:any='http://localhost:3000/dreamCatchers'

  constructor(private http:HttpClient) { }

  getDreamcatcher(): Observable<any> {

    return this.http.get(this.apiUrl)

  }

}
