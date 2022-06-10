import { Component } from '@angular/core';
import { Analytics } from '../../analytics';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
ionViewWillEnter() {
    Analytics.pageTracking('/tabs/tab3', 'tab3');
  }
}
