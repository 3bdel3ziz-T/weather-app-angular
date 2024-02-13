import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TodayDate } from 'src/app/models/today-date';
import { City, List } from 'src/app/models/weather';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnChanges {

  changeCity: boolean = false;

  @Input()
  cityInfo!: City;
  @Input()
  todayWeather!: List;

  todayDate!: TodayDate;

  constructor(dateService: DateService) {
    this.todayDate = dateService.getNowDate()
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.changeCityEvent()
  }
  changeCityEvent() {
    this.changeCity = true
    setTimeout(() => this.changeCity = false, 1500)
  }
}