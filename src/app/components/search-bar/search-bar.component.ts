import {Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent{

  cityName: string = "";
  @Input()
  isVisible: boolean = false;

  @Output()
  EmitCity = new EventEmitter;

  @ViewChild('searchInput') searchInput!: ElementRef

  constructor() {
    addEventListener('keydown',(Ev)=> {
      this.cityName !== "" && Ev.key == 'Enter' ? this.getCityName() : false
    })
  }

  getCityName(): void {
    this.EmitCity.emit(this.cityName)
    this.cityName = "";
  }


}
