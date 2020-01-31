import { Component, OnInit } from '@angular/core';

interface User { id: number; name: string; age: number; }

@Component({
  selector: 'app-convert-obj-arr',
  templateUrl: './convert-obj-arr.component.html',
  styleUrls: ['./convert-obj-arr.component.scss']
})
export class ConvertObjArrComponent implements OnInit {


  dataA: User[] = [
    {
      id: 32434,
      name: 'GeraRDO',
      age: 29
    },
    {
      id: 1434,
      name: 'Manuel',
      age: 29
    },
    {
      id: 12434,
      name: 'Reyes',
      age: 29
    },
    {
      id: 43434,
      name: 'Fernandez',
      age: 29
    },
  ]
  ObjectCreated: any;
  ArrayCreated: any;

  constructor() { }

  ngOnInit() {
    this.ObjectCreated = this.convertArrayToObject(this.dataA, 'id');
    this.ArrayCreated = this.convertObjectToArray(this.ObjectCreated);
    // this.ArrayCreated =  Object.values(ObjectCreated) importar polyfills para usar Object.values
    console.log(this.ObjectCreated);
    console.log(this.ArrayCreated);
  }

  convertArrayToObject = (toObject: User[], key: string) => {
    return toObject.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, {});
  }

  convertObjectToArray = (obj): User[] => Object.keys(obj).map(key => obj[key]);



}
