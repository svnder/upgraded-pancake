import { Component } from '@angular/core';
import { environment } from './env';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class='logo'>
      </header>
    </main>
    <section class='content'>
      <app-home></app-home>
    </section>
  `,
  styleUrl: './app.component.css',
  imports: [CommonModule, HomeComponent],
})
export class AppComponent {
  cityName: string = '';
  weatherData: any;
  h1: string = 'Weather App';
  @Input() searchCity: string = 'London';


  constructor(private ApiService: ApiService) { }

  getWeather() {
    this.ApiService.getWeather(this.cityName).subscribe(
      (weatherData) => {
        this.weatherData = weatherData;
      }
    )
  }
  ngOnInit() {
    this.ApiService.getWeather(this.cityName).subscribe(
      (weatherData) => {
        this.weatherData = weatherData;
      }
    )

  }

}
