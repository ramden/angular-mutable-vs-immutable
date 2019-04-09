import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

export interface ICustomNestedObject {
  title: string,
}

export interface ICustomObject {
  title: string,
  date: Date,
  nestedObject: ICustomNestedObject
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  listData: Array<ICustomObject> = [];

  private _listDataSubject = new BehaviorSubject([])
  listDataObserver$ = this._listDataSubject.asObservable()

  addItem(item: ICustomObject) {
    this.listData.push(item);
    this._listDataSubject.value.push(item)
    //this._listDataSubject.next();
  }

  deleteLast() {
    //this.listData.pop();
    this._listDataSubject.value.pop()
    //this._listDataSubject.next(this.listData);
  }

  updateLast() {
    this.listData[this.listData.length - 1].nestedObject.title = this.listData[this.listData.length - 1].nestedObject.title + " UPDATED";
  }
}