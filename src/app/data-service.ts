import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

export interface ICustomObject {
  title: string,
  date: Date
}

var listData: Array<ICustomObject> = [
  {
    title: "Item 1",
    date: new Date()
  }
];

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _listDataSubject = new BehaviorSubject(listData)
  listDataObserver$ = this._listDataSubject.asObserver()

  addItem(item: ICustomObject) {
    listData.push(item);
    this._listDataSubject.next(listData);
  }

  deleteItem(item: ICustomObject) {
    listData = listData.filter(obj => obj !== item);
    this._listDataSubject.next(listData);
  }

  updateItem(item: ICustomObject) {
    let index = listData.indexOf(item);
    listData[index] = item;
  }
}