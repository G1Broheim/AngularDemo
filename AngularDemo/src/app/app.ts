import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherHubService } from './services/weather-hub.service';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  constructor(public weatherHubService: WeatherHubService) {}

  ngOnInit(): void {
    this.weatherHubService.startConnection();
  }
}
