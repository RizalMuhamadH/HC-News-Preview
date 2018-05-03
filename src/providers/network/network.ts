import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  news_controller/getAllNews
*/
@Injectable()
export class NetworkProvider {

  url: string;
  constructor(public http: Http) {
    this.url = '';
  }

  getAllNews(id: string){
    let param = new FormData();
    param.append('edition_id',id);
    return this.http.post(this.url +'index.php/news_controller/getAllNews',param)
      .map(this.extractRespone)
      .do(this.logRespone);
  }
  private extractRespone(res: Response) {
    return res.json();
  }
  private logRespone(res: Response) {
    console.log(res);

  }
  
}
