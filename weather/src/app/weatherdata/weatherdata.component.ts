import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWeatherdata } from '../IWeatherdata';

@Component({
  selector: 'app-weatherdata',
  imports: [CommonModule],
  template: `
    <section class='weather'>
      <h2>Weather in {{ WeatherData.country }}</h2>
      <p>Temperature: {{ WeatherData.temp }}°C</p>
      <p>Feels Like: {{ WeatherData.feels_like }}°C</p>
    </section>
  `,
  styleUrls: ['./weatherdata.component.css']
})
export class WeatherdataComponent {
  @Input() WeatherData!: IWeatherdata;
}
