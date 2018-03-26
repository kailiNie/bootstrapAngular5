import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { ActivatedRoute,Router} from '@angular/router';  
 
import { HttpServiceService } from '../../services/http-service.service';

@Component({
  selector: 'app-pay-submit',
  templateUrl: './pay-submit.component.html',
  styleUrls: ['./pay-submit.component.css']
})

export class PaySubmitComponent implements OnInit {

  private formModel : FormGroup;
  private fb:FormBuilder = new FormBuilder();
  private RId:number;
  private OrderId :number;
  private codeMsg : string = '获取验证码';
  private isDisSendCode : boolean = false;


  constructor(private routerinfo : ActivatedRoute,private httpService:HttpServiceService,private router : Router) {

  	this.formModel = this.fb.group({
  		TotalAmount : ['',[Validators.required]],
  		QuickSmsCode : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
  	});
  }

  // 支付
  onSubmit(){
     this.httpService.getHttp('api/Pay/PayUnifiedOrder',{
       OrderId : this.OrderId,
       QuickSmsCode : this.formModel.get('QuickSmsCode').value 
     }).then((value)=>{
       console.log(value);
        const {IsSuccess,Mes,Data}:any = value;
        if(!IsSuccess){
          alert(Mes)
          return;
        }
        this.router.navigate(['/PaySuncess']);
    });
  }
  /**
   * 获取验证码
   * 
   */
  getSmscode(){
      if(!this.formModel.get('TotalAmount').valid || this.isDisSendCode){
        return;
      }

    var params = {
      RId : this.RId,
      TotalAmount :this.formModel.get('TotalAmount').value
    };

  	this.httpService.getHttp('api/Pay/PrepareUnifiedOrder',params).then((value)=>{
        const {IsSuccess,Mes,Data}:any = value;
        if(!IsSuccess){
          alert(Mes)
          return;
        }
       this.disSendCode();
       const { OrderId } = Data;
       this.OrderId = OrderId;
    });
  }

  ngOnInit() {
    this.RId = this.routerinfo.snapshot.params['RId'];
  }
  //禁止发送验证码 倒计时
  disSendCode (){
   let time = 120;
    let interval =  setInterval(()=>{
      time--
      this.codeMsg = `${time}s后重新获取`;
      this.isDisSendCode = true;
       if(time ===0){
         clearInterval(interval);
         this.codeMsg = '获取验证码';
          this.isDisSendCode = false;
       }
    },1000)
  }
   

}
