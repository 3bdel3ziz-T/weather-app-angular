import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-btn',
  templateUrl: './search-btn.component.html',
  styleUrls: ['./search-btn.component.scss']
})
export class SearchBtnComponent {
  @Input()
  visible: boolean = true;
}
