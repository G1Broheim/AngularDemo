import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  forecasts = signal<WeatherForecast[]>([]);

  ngOnInit() {
    this.http.get<WeatherForecast[]>('/WeatherForecast')
      .subscribe(data => this.forecasts.set(data));
  }
}
