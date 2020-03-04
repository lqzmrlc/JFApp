import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public config: any = {};
  public selectedId: any = "A2";
  public Catalogs: any[] = [];
  public Menus: any[] = [];

  constructor(public navController: NavController, public common: CommonService) {

    this.config = this.common.config;
  }
  ngOnInit(): void {
    this.getCatalogs();
  }
  getCatalogs() {
    var url = "Test/webSSO.nsf/webSSO.xsp/getMenus";
    this.common.ajaxGet(url).then((response: any) => {
      this.Catalogs = response.data;
      this.getMenus(this.Catalogs[0].id);
    })
  }
  getMenus(pid) {
    var url = "Test/webSSO.nsf/webSSO.xsp/getMenus?pid=" + pid;
    this.common.ajaxGet(url).then((response: any) => {
      console.log(response);
      this.Menus = response.data;
    })
    this.selectedId = pid;
  }

}
