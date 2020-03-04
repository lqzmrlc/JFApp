import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('slide1',{static:true}) slide1;

  public news: any[] = [];
  public page: number = 1;
  //轮播图列表
  public focusList: any[] = [];
  //轮播图的属性
  public slidesOpts = {
    speed: 400,
    autoplay: {
      delay: 2000,
    },
    loop: true
  }
  constructor(public navController:NavController,public common: CommonService) { }

  ngOnInit(): void {
    this.getNews(null);
  }
  //手动滑动完成
  slideTouchEnd() {
    this.slide1.startAutoplay();
  }
  getNews(event) {
    var url = "Test/webSSO.nsf/webSSO.xsp/getMenus";
    this.common.ajaxGet(url).then((response: any) => {
      this.news = this.news.concat(response.data);
      ++this.page;
      if (response.data.length < 6) {
        event ? event.target.disabled = true : '';
      }
      event ? event.target.complete() : '';
    })
  }

}
