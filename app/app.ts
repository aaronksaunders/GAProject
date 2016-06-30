import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar, GoogleAnalytics} from 'ionic-native';
import {HomePage} from './pages/home/home';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      // google
      GoogleAnalytics.debugMode()
      GoogleAnalytics.startTrackerWithId("YOUR_GOOGLE_ID");

      GoogleAnalytics.enableUncaughtExceptionReporting(true)
        .then((_success) => {
          console.log(_success)
        }).catch((_error) => {
          console.log(_error)
        })

    });
  }
}

ionicBootstrap(MyApp);
