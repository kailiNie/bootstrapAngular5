import { Component, OnInit,Input } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
 	
 	@Input()
 	 private msg :string
 
  // private msg:string = httpService.msg;

  constructor(private httpService:HttpServiceService) { }

  ngOnInit() {

  }

  alertMsgEmit(){
  	 console.log('进入');
  }

}
