import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const newUser = new User();
// console.log({ newUser });

const newCompany = new Company();
// console.log({ newCompany });

setTimeout(() => {
  const googleMap = new CustomMap('googlemap');
  googleMap.addUserMarker(newUser);
  googleMap.addCompanyMarker(newCompany);
}, 1000);
