import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, GoogleAnalytics } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      // google
      return GoogleAnalytics.startTrackerWithId("YOUR-GOOGLE-ID")
        .then(() => {
          console.log('Google analytics is ready now');
          return GoogleAnalytics.enableUncaughtExceptionReporting(true)
        }).then((_success) => {
          console.log("startTrackerWithId success")
        }).catch((_error) => {
          console.log("enableUncaughtExceptionReporting", _error)
        })
    })
  }
}
