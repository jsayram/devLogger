import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Log } from '../models/Log';

@Injectable()
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({id: null,text: null,date: null});
  selectedLog = this.logSource.asObservable();

  constructor() { 
   this.logs = [
  	{ id: '1', text: 'Generated components', date: new Date('12/26/2917 12:44:23')},
  	{ id: '2', text: 'Added Bootstrap', date: new Date('12/28/2917 9:33:23')},
  	{ id: '3', text: 'Added logs component', date: new Date('12/27/2917 12:00:23')}

  	]
  }
  getLogs(): Observable<Log[]> {
  	return of(this.logs);
  }

  setFormLog(log: Log) {
  	this.logSource.next(log);
  }

  addLog(log: Log){
  	this.logs.unshift(log);
  }

  //this updates log
  updateLog(log: Log) {
  	this.logs.forEach((cur, index) => {
  		//this will delete it 
  		if(log.id === cur.id){
  			this.logs.splice(index,1);
  		}
  	});
  	//this will pass in the updated log
  	this.logs.unshift(log);
  }


  //this deletes log 
  deleteLog(log: Log) {
  	this.logs.forEach((cur, index) => {
  		//this will delete it 
  		if(log.id === cur.id){
  			this.logs.splice(index,1);
  		}
  	});
  }


}
