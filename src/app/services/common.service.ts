import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public config: any = {
    domain: 'http://oa.jf81.com/'
  }

  constructor(public http: HttpClient) {

  }
 async ajaxGet(url) {
    //var api = this.config.domain + url;
    var api =url;
    return new Promise((resove, reject) => {
      this.http.get(api).subscribe((response) => {
        resove(response);
      }, (error) => {
        reject(error);
      })
    })
  }
  
}
