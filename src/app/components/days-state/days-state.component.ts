import { Component, Input } from '@angular/core';
import { List } from 'src/app/models/weather';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector:  'days-state',
  templateUrl: './days-state.component.html',
  styleUrls: ['./days-state.component.scss']
})
export class DaysStateComponent {
  daysList!: string[];
  @Input()
  forecastList!: List[];
  constructor(private dateService: DateService) {
    this.daysList =
    dateService.getNext4Days(dateService.getNowDate().week.todayI)
    .map((e: string) => e.slice(0, 3))
  }
}

