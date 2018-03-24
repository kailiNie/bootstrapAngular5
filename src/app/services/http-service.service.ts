
import { Injectable,EventEmitter,Output } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class HttpServiceService {
  
   
 

  constructor( public http:Http) {}
  //发送HTTP post请求
  
  getHttp =(url : string,param : any) => new Promise((resolve, reject)=> {
    this.http.post(`http://doc.api.taidupay.com/${url}`,
       param).subscribe(
            (val) => {

                 const { url,_body} : any = val;
                 var body = JSON.parse(_body);
                 resolve(body);
            },
            response => {
             //   reject(response);
            },
            () => {
                console.log("请求完成");
        }
      );
     
  });

 
 
}
