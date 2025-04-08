import { Component, OnInit } from '@angular/core';
import { environment } from './env';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports : [CommonModule, FormsModule],
})
export class AppComponent {
  cityName: string = '';
  weatherData: any;
  errorMsg: string = '';


  constructor(private ApiService: ApiService) { }

  getWeather() {
    if (this.cityName) {
      this.ApiService.getWeather(this.cityName, environment.apiKey).subscribe(
        (data) => {
          this.weatherData = data;
          this.errorMsg = '';
        },
        (err) => {
          this.errorMsg = 'City not found. Please try again.';
          this.weatherData = null;
        }
      );
    } else {
      this.errorMsg = 'Please enter a city name.';
      this.weatherData = null;
    }
  }

}

