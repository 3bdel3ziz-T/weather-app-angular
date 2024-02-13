import { Injectable } from '@angular/core';
import { TodayDate } from '../models/today-date';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  weekDays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() { }
  getNowDate(): TodayDate {
    const dateNow: Date = new Date;

    const today = this.weekDays[dateNow.getDay()];
      let todayI = 1;
    this.weekDays.map((e: string, i: number) => { today === e ? todayI = i : "" });

    const
      monthDay = dateNow.getDate(),
      month = this.months[(dateNow.getMonth())],
      year = dateNow.getFullYear();
    return {
      week: { today, todayI },
      monthDay, month, year
    }
  }

  getNext4Days(todayI:number):string[] {
    let next4: string[] = [];
    todayI++
    for (let i = 0; i < 4; i++) {
      todayI === this.weekDays.length ? todayI = 0 : false;
      next4.push(this.weekDays[todayI])
      todayI++
    }
    return next4;
  }
}
