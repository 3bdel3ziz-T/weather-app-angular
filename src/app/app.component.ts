import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { List, WeatherStatus } from './models/weather';
import { map } from 'rxjs';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  todayWeather!: WeatherStatus;
  searchBar: boolean = false;
  initCity: string = `cairo`;
  uniqueDays: List[] = [];
  @ViewChild('searchBarComponent') searchBarComponent!: SearchBarComponent

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherByCityName(this.initCity)
  }

  getWeatherByCityName(cityName: string) {
    this.searchBar = false;
    if (cityName.length && typeof cityName === 'string') {
      this.weatherService.getWeather(cityName)
        // .pipe(
        //   map((item: List) => item.weather[0].icon =
        //     this.weatherService.changeIconCode(item.weather[0].icon))
        // )
        .subscribe({
          next: (arg: WeatherStatus) => {
            this.weatherService.changeIconCode(arg.list);
            this.todayWeather = arg;
            this.uniqueDays = this.onlyUniqueDays(arg.list)
          },
          error: (err: any) => {
            err !== undefined ? console.log(err) : false
          },
          complete: () => { },
        })
    } else {
      return false
    }
    return false
  }

  onlyUniqueDays(arr: List[]): List[] {
    return arr.filter((e: List) =>
      (new Date(e.dt_txt).getHours() === 0))
  }

  focusOnClick() {
    this.searchBar = !this.searchBar;
    this.searchBarComponent.searchInput.nativeElement.focus();
  }
}
