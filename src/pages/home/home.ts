import { ReadPage } from './../read/read';
import { NetworkProvider } from './../../providers/network/network';
import { News } from './../../models/news';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  item: any;
  data: any;
  news: Array<News>;
  constructor(public navCtrl: NavController, private network: NetworkProvider, private toast: ToastController) {
  }

  ionViewDidLoad(){
   this.getAllNews();
  }

  getAllNews(){
    this.network.getAllNews('0').subscribe(data =>{
      this.data = data;
      console.log(data);
      

      if(this.data.status == 'failed'){
        this.toast.create({
          message: 'Article Empty',
          duration: 3000,
          position: 'bottom'
        }).present();
      } else{
        this.news = this.data.data;
      }
    });
  }

  itemSelected(item) {
    this.navCtrl.push(ReadPage, {
      item: item
    });
  }

}
