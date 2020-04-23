import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare var window;


export interface coord{
  lat: string;
  lng: string;
  
}
 
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public watch: any;    
  public lat: number = 0;
  public lng: number = 0;

 
  private todos: Observable<coord[]>;
 
  constructor(public zone: NgZone) {}
  
  startTracking() {
    
    // Background Tracking

    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10, 
      debug: true,
      interval: 2000 
    };
    window.app.backgroundGeolocation.configure(config).subscribe((location) => {

      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
      });

    }, (err) => {

      console.log(err);

    });

    // Turn ON the background-geolocation system.
    window.app.backgroundGeolocation.stop();


    // Foreground Tracking

  let options = {
    frequency: 3000, 
    enableHighAccuracy: true
  };

  this.watch = window.app.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

    console.log(position);

    // Run update inside of Angular's zone
    this.zone.run(() => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });

  })

  }

  stopTracking() {

    console.log('stopTracking');

    window.app.backgroundGeolocation.finish();
    this.watch.unsubscribe();

  }
  getTodos() {
    return this.todos;
  }
 

}
