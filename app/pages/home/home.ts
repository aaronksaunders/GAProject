import {Component} from "@angular/core";
import {NavController, Platform} from 'ionic-angular';
import {GoogleAnalytics} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  constructor(private navController: NavController, private platform: Platform) {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackView("Home Page");
    });
  }

  trackEvent() {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackEvent("Category", "Action", "Label", 25);
    });
  }
}
