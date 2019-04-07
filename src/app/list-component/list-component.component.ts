import {Component, Input, OnInit} from '@angular/core';
import {ICustomObject} from "../data-service";

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input
  listData: Array<ICustomObject>;

  constructor() { }

  ngOnInit() {
  }

}
