import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherdataComponent } from '../weatherdata/weatherdata.component';
import { IWeatherdata } from '../IWeatherdata';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-home',
  imports: [CommonModule, WeatherdataComponent, FormsModule],
  template: `
    <section class='container'>
  <form>
    <input type="text" [(ngModel)]="InterfaceWeather.country" placeholder="Enter city name" name="first" />
    <button class="primary" type="button" (click)="searchCity(InterfaceWeather.country)">Search</button>
  </form>
    </section>
    <section class='weather'>
      <app-weatherdata [WeatherData]='InterfaceWeather' ></app-weatherdata>
    </section>
  `,
  styleUrls: ['./home.component.css']

})

export class HomeComponent {
  InterfaceWeather: IWeatherdata = {
    country: <string>'',
    temp: <number><any>0,
    feels_like: <number><any>0,
  };

  constructor(private apiService: ApiService) { }

  searchCity(country: string) {
    console.log('City:', country);
  
    this.apiService.getWeather(country).subscribe(
      (response) => {
        console.log('Andmed:', response);
        this.InterfaceWeather = {
          country: response.name,
          temp: Math.round(response.main.temp - 273.15),
          feels_like: Math.round(response.main.feels_like - 273.15),
        };
      },
      
    );
  }

  ngOnInit() {

  }
}
