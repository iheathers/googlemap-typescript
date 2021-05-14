import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const newUser = new User();
// console.log({ newUser });

const newCompany = new Company();
// console.log({ newCompany });

window.initMap = function () {
  const googleMap = new CustomMap('googlemap');
  const userMarker = googleMap.addMarker(newUser);
  const companyMarker = googleMap.addMarker(newCompany);
};

// setTimeout(() => {
// const googleMap = new CustomMap('googlemap');
// const userMarker = googleMap.addMarker(newUser);
// const companyMarker = googleMap.addMarker(newCompany);
//   console.log(google);
// }, 1000);
