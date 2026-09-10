import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { WeatherForecast } from '../models/weather-forecast';

@Injectable({ providedIn: 'root' })
export class WeatherHubService {
    private hubConnection!: signalR.HubConnection;
    public latestForecast: WritableSignal<WeatherForecast[]> = signal([]);

    startConnection(): void {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('http://localhost:5000/weatherForecastHub')
            .build();

        this.hubConnection
            .start()
            .then(() => console.log('SignalR connection started'))
            .catch(err => console.error('Error connecting to SignalR', err));

        this.hubConnection.on('ForecastUpdated', (forecast) => {
            this.latestForecast.set(forecast as WeatherForecast[]);
            console.log(this.latestForecast);
        });
    }
}