import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './env';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = environment.apiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  test = 'hello world';
  
  constructor(private http: HttpClient) {}

  
  getWeather(city:string):Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    console.log(`Got data from ${url}`);
    return this.http.get(url);
  }
}