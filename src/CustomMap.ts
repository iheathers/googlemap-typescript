import { User } from './User';
import { Company } from './Company';

export interface Mappable {
  location: {
    longitude: number;
    latitude: number;
  };

  getInfoContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(wrapperId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(wrapperId), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.latitude,
        lng: mappable.location.longitude,
      },
    });

    const infowindow = new google.maps.InfoWindow({
      content: mappable.getInfoContent(),
    });

    marker.addListener('click', () => {
      infowindow.open(this.googleMap, marker);
    });
  }
}
