import { Component, OnInit } from '@angular/core';
import{RouterModule, Routes, Router} from '@angular/router';
import {ServiceseriesService} from '../serviceseries.service';
import { HttpModule, RequestOptions, Http ,Headers} from '@angular/http';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  valid: any;
status
  constructor(private router:Router,public demo:ServiceseriesService) { }
  ngOnInit() {
   
  }
 onclick2(){
this.router.navigate(['/series']);
      
  }
  onclick6(){
this.router.navigate(['/comicss']);
      
  }
onclick3(f1){

// console.log(f1.value.username);
// console.log(f1.value.password);
  console.log(f1.value)
  this.demo.loginusers(f1.value).subscribe(res=>{
  // this.valid=res;
console.log(res,"fromservice");
//console.log(res);
this.status=res[0].types
console.log(this.status)
  
if(this.status == "admin")
{
  this.router.navigate(['/admin']);
}
else if(this.status == "super")
{
this.router.navigate(['/super']);
}
else if(this.status == "user")
{
  this.router.navigate(['/user']);
}
else
{
  alert("User Does not exist")
}
  }

  )}

}
