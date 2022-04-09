import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DreamcatcherService {
  
 private apiUrl:any='http://localhost:3000/dreamCatchers'
 private apiUrl1:any='http://localhost:3000/orderedDreamCaptures'

  constructor(private http:HttpClient) { }

  getDreamcatchers(): Observable<any> {

    return this.http.get(this.apiUrl)

  }
  postDreamcapture(id: any): Observable<any> {
    return this.http.post(`${this.apiUrl1}`,id);
  }
  getDreamcapture(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getOrderedDreamcatchers(): Observable<any> {

    return this.http.get(this.apiUrl1)

  }
  deleteDreamCapture(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl1}/${id}`);
  }

}
