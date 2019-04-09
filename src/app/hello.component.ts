import { Component, Input } from '@angular/core';
import {DataService} from "./data-service";

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  listData$ = this.dataService.listDataObserver$

  constructor(private dataService: DataService) {

  }
  
  add() {
    var newItem = {
      title: "Item " + new Date().getMilliseconds().toString(),
      date: new Date(),
      nestedObject: {
        title: "test"
      }
    }

    this.dataService.addItem(newItem)
  }

  delete() {
    this.dataService.deleteLast()
  }

  edit() {
    this.dataService.updateLast()
  }
}
