import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServiceseriesService {


  baseurl: string = 'http://localhost:3000/api/v1/post_series';
  _url: string = 'http://localhost:3000/api/v1/post_season';
  _url2: string = 'http://localhost:3000/api/v1/post_comic';
  // _url3='http://localhost:2000/api/v1/post_series/a';
  _url3 = 'http://localhost:3000/api/v1/searchusers';
  url4 = 'http://localhost:3000/api/v1/searchusers/xx';
  url5 = 'http://localhost:3000/api/v1/delete_user/a/';
  url7 = 'http://localhost:3000/api/v1/post_series/a';
  url8 = 'http://localhost:3000/api/v1/search_comic/a/';
 url88='http://localhost:3000/api/v1/post_series/a'
  // url8 = 'http://localhost:3000/v1/search_comic/a/';
  variable: string;
  constructor(public httpService: Http) { }

  get_series(): Observable<any> {

    return this.httpService.get(this.baseurl).map(
      res => res.json()
    );
  }
  get_seasons(): Observable<any> {

    return this.httpService.get(this._url).map(
      res => res.json()
    );
  }

get_users(): Observable<any> {
return this.httpService.get(this.url88).map(
      res => res.json()
    );
}
  get_comics(): Observable<any> {

    return this.httpService.get(this._url2).map(
      res => res.json()
    );
  }
  // get_users(): Observable<any> {

  //   return this.httpService.get(this.url7).map(
  //     res => res.json()
  //   );
  // }

  //get function of status
  search6(search): Observable<any> {
    console.log(search)
    // console(search);
    return this.httpService.get(this._url3 + search).map(
      data => data.json()
    );

  }
  //search function of status
  loginusers(form): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    console.log(form, "service")
    return this.httpService.post(this._url3, form, headers)
      .map((res => res.json()));
  }

  superupdate(form): Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    console.log(form, "service")
    return this.httpService.put(this.url4, form)
      .map((res => res.json()));

  }
  DeleteUsers(form) {
    console.log(form, "hey");
    return this.httpService.delete(this.url5 + form).map(
      (res: Response) => res.json());
  }
  //   deleteuser(form): Observable<any>  {

  //     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //     let options = new RequestOptions({ headers: headers });
  //     console.log(form,"service")
  //     return this.httpService.put(this.url5, form)
  //       .map((res => res.json()));

  // }
  search(a): Observable<any> {
    console.log(a, "in service")
    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //       let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.url8 + a).map(
      data => data.json()
    );
  }
}