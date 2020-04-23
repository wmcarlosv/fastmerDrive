import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
//import { AndroidFullScreenOriginal } from '@ionic-native/android-full-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private android: AndroidFullScreen,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      //this.statusBar.styleDefault();
      // let status bar overlay webview
      //this.statusBar.overlaysWebView(true);
      // set status bar to white
      //if (this.platform.is('android')) {
        //this.statusBar.backgroundColorByHexString("#33000000");
      //}

      //this.android.immersiveMode();

      //this.splashScreen.hide();
    
      this.statusBar.styleDefault();
      this.statusBar.styleBlackTranslucent()
      //this.statusBar.backgroundColorByHexString("#33000000");
      this.splashScreen.hide();
    
    });
  }
}
