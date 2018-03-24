import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';  
import { Router} from '@angular/router';  
import { HttpServiceService } from '../../services/http-service.service';

@Component({
  selector: 'app-pay-submit1',
  templateUrl: './pay-submit1.component.html',
  styleUrls: ['./pay-submit1.component.css']
})
export class PaySubmit1Component  {
  //进件类
  public payObj : Pay = new Pay('','','','');
  //form表单
  private formModel : FormGroup;
  //form组件表单
  private fb:FormBuilder = new FormBuilder();


  constructor(private router : Router,private httpService:HttpServiceService) { 
    //验证法则
    this.formModel = this.fb.group({
       'BankAccount' : ['',Validators.required],
       'BankAccountName' : ['',Validators.required],
       'ContactPhone' : ['',Validators.required],
       'IdCard' : ['',Validators.required]
    });
  }


  onSubmit(){  
     this.httpService.getHttp('api/Pay/UnifiedReportMechant',this.formModel.value).then((value)=>{
         const {IsSuccess,Mes,Data}:any = value;
         if(!IsSuccess){
           alert(Mes)
           return;
         }
         const { RId } = Data;
         this.router.navigate(['/paySubmit',RId]);
     });
  }  

}


//进件类
export class Pay {
	constructor(BankAccount:string,BankAccountName:string,ContactPhone:string,IdCard:string) {
 		 
 	}
}
