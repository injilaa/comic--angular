import { Component, OnInit } from '@angular/core';
import {ServiceseriesService} from '../serviceseries.service';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
data2=[];
flag=true;
  constructor(public demo:ServiceseriesService) { }

  ngOnInit() {
    this.onclick()
  }

  onclick(){
  this.flag=!this.flag;
   this.demo.get_comics()
  .subscribe(resdata => this.data2 = resdata);
    console.log(this.data2)

   }



}
