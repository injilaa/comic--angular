import { Component, OnInit } from '@angular/core';
import{RouterModule, Routes,Router} from '@angular/router';
import {ServiceseriesService} from '../serviceseries.service';
import { HttpModule, RequestOptions, Http ,Headers} from '@angular/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
click3(){
this.router.navigate(['/series']);
      
  }
}
