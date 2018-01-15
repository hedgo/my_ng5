import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) {
  }

  dailyForecast() {
    // return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
    // return this._http.get("http://jsonplaceholder.typicode.com/posts")
     return this._http.get("http://localhost:3000/weather")
    // return this._http.get("http://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid=b1b15e88fa797225412429c1c50c122a1")
      .map(result => result);
  }

}
