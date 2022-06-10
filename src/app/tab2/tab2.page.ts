import { Component } from '@angular/core';
import { Analytics } from '../../analytics';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
	
	ionViewWillEnter() {
    Analytics.pageTracking('/tabs/tab2', 'tab2');
  }	

}
