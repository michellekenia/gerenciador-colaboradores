import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-type': 'application/json; charset-UTF-8', 'Access-Control-Allow-Origin':  '*'
})
const options = {
  headers
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private httpClient: HttpClient) { }


get<T>(url: string): Observable<T> {
  return this.httpClient.get<T>(url, options);
}

post<T>(url: string, body: any): Observable<T>{
  return this.httpClient.post<T>(url, body, options)
}

put<T>(url: string, body: any): Observable<T>{
  return this.httpClient.put<T>(url, body, options)
}

delete<T>(url: string): Observable<T>{
  return this.httpClient.delete<T>(url, options)
}

}
