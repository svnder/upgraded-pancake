import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherdataComponent } from '../weatherdata/weatherdata.component';
import { IWeatherdata } from '../IWeatherdata';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule, WeatherdataComponent],
  template: `
    <section class='container'>
  <form>
    <input type="text" [(ngModel)]="cityName" placeholder="Enter city name" />
    <button class="primary" type="button" (click)="searchCity(cityName)">Search</button>
  </form>
    </section>
    <section class='weather'>
      <app-weatherdata [WeatherData]='InterfaceWeather' ></app-weatherdata>
    </section>
  `,
  styleUrls: ['./home.component.css']

})



export class HomeComponent {
  cityName: string = '';
  InterfaceWeather: IWeatherdata = {
    country: '',
    temp: 0,
    feels_like: 0,
  };

  constructor(private apiService: ApiService) { }

  showErrorMessage: boolean = false;
  searchCity(city: string) {
    if (!city || !city.trim()) { // Check if city is empty or just whitespace
      alert('Please enter a city name');
      this.showErrorMessage = true;
      return;
    }
  
    this.apiService.getWeather(city).subscribe({
      next: (weatherData) => {
        console.log('Data:', weatherData);
        this.InterfaceWeather = {
          country: weatherData.sys.country,
          temp: weatherData.main.temp,
          feels_like: weatherData.main.feels_like,
        };
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again later.');
      },
      complete: () => {
        console.log('Weather data fetch complete.');
      }
    });
  }
  ngOnInit() {

  }
}
