import { User } from './User';
import { Company } from './Company';

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.latitude,
        lng: user.location.logitude,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.latitude,
        lng: company.location.longitude,
      },
    });
  }
}
