import { Component, OnInit } from '@angular/core';
import{RouterModule, Routes,Router} from '@angular/router';
import {ServiceseriesService} from '../serviceseries.service';
import { HttpModule, RequestOptions, Http ,Headers} from '@angular/http';
@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {
public Users;
data2=[];
data3=[];
  constructor(private router: Router,public demo:ServiceseriesService) { }

  ngOnInit() {
  }
click3(){
this.router.navigate(['/series']);
      };

onclick3(f1){
  console.log(f1.value)
// console.log(f1.value,"form")
this.demo.superupdate(f1.value).subscribe(res=>{
  
console.log(res,"fromservice");


})
}
showall(){
   this.demo.get_users()
  .subscribe(resdata => this.data3 = resdata);
    console.log(this.data3)
}

onclick4(f2)
  { 
    console.log(f2.value);
     this.demo.DeleteUsers(f2.value).subscribe(res => {
      this.Users = res.respData.data;
      console.log(this.Users);
     

    }
      , errorr => {             // If there is an error it will alert an error.
        alert(errorr);
      });
  }
//   onclick(){
//    this.demo.get_users()
//   .subscribe(resdata => this.data2 = resdata);
//   console.log(this.data2)
//  //this.flag=!this.flag;
//  //this.router.navigate(['/season']);
//    }
}
