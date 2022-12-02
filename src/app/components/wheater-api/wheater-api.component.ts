import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-wheater-api',
  templateUrl: './wheater-api.component.html',
  styleUrls: ['./wheater-api.component.scss'],
})
@Input()
export class WheaterApiComponent implements OnInit {

  WeatherData:any;
  constructor() { }

  ngOnInit() {
    this.getWheatherData();
    console.log(this.WeatherData);
  }

  getWheatherData(){
    let data = JSON.parse('{"coord":{"lon":-70.6164,"lat":-33.5},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":292.72,"feels_like":291.91,"temp_min":290.54,"temp_max":293.7,"pressure":975,"humidity":45},"visibility":10000,"wind":{"speed":3.09,"deg":160},"clouds":{"all":0},"dt":1669953376,"sys":{"type":2,"id":2077709,"country":"CL","sunrise":1669973140,"sunset":1670024311},"timezone":-10800,"id":3872139,"name":"San Joaquín","cod":200}')
    this.setWeatherData(data);
  }
  setWeatherData(data){
    this.WeatherData=data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset*1000);
    this.WeatherData.sunsetTime = sunsetTime.toLocaleTimeString();
    let currentDate= new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());

    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.temp_feels_like - 273.15).toFixed(0);
  }

}
