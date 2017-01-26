import {Component} from "@angular/core";
import {NavController, Platform} from 'ionic-angular';
import {GoogleAnalytics} from 'ionic-native';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navController: NavController, private platform: Platform) {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackView("Home Page", "www.in3dc.com/membership", true);
    });
  }

  trackEvent() {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackEvent("Page", "HomePage-Open-Action", "Label", 1);
    });
  }
}
