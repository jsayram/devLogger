import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';
import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private logService: LogService) { 
  } 

  ngOnInit() {
    //subcribe to the selectedLog observable
    this.logService.selectedLog.subscribe(log =>{
    	if(log.id !== null) {
    		this.isNew = false; 
    		this.id = log.id;
    		this.text = log.text;
    		this.date = log.date;
    	}
    });
  }

  onSubmit(){
  	//check if new log 
  	if(this.isNew){
  		//create a new log 
  		const newLog ={
  			id: this.generateId(),
  			text: this.text,
  			date: new Date()
  		}
  		//Add log
  		this.logService.addLog(newLog);
  	}else{
  	   //create log to be updated
  	   const updLog = {
  	   	id: this.id,
  	   	text: this.text,
  	   	date: new Date()
  	   };
  	   //update log
  	   this.logService.updateLog(updLog);
  	}
   //Clear State 
   this.clearState();
  }

  //clears the form and returns to default empty values
  clearState(){
  	  this.isNew = true;
      this.id = '';
      this.text = '';
      this.date = '';
      this.logService.clearState();
  }

 //gotten from stackOverFlow (https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript)
  generateId(){
		 return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		    return v.toString(16);
	  	 });
	  }

}
