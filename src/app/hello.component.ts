import { Component, Input } from '@angular/core';
import {DataService} from "./data-service";

@Component({
  selector: 'hello',
  template: `<app-list-component listData="listData$ | async"></app-list-component>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  listData$ = this.dataService.listDataObserver$
  constructor(private dataService: DataService) {

  }
  @Input() name: string;
}
