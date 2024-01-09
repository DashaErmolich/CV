import { Injectable } from '@angular/core';
import { Data } from '../models/data.model';
import * as data from '../../assets/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data = data;

  constructor() { }
}
