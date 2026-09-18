import { Component, OnInit, inject } from '@angular/core';
import { WeatherHubService } from './services/weather-hub.service';
import { httpResource} from '@angular/common/http';
import { WeatherForecast } from './models/weather-forecast';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  weatherHubService = inject(WeatherHubService);

  // api fetch from a resource
  forecastApiResource = httpResource<WeatherForecast[]>(() => `/WeatherForecast`, {});

  ngOnInit(): void {
    // start the hub connection in ngOnInit
    this.weatherHubService.startConnection();
  }
}
