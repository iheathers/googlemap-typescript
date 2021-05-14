import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  name: string;

  catchPhrase: string;

  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }

  getInfoContent(): string {
    return `
    <div>
        <h1>Company: ${this.name}</h1>
        CatchPhrase: ${this.catchPhrase}
      </div>
      `;
  }
}
