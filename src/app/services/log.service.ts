import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable()
export class LogService {
  logs: Log[];

  constructor() { 
   this.logs = [
  	{ id: '1', text: 'Generated components', date: new Date('12/26/2917 12:44:23')},
  	{ id: '2', text: 'Added Bootstrap', date: new Date('12/28/2917 9:33:23')},
  	{ id: '3', text: 'Added logs component', date: new Date('12/27/2917 12:00:23')}

  	]
  }
  getLogs(){
  	return this.logs;
  }

}
