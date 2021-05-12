import faker from 'faker';

export class User {
  name: string;

  location: {
    latitude: number;
    logitude: number;
  };

  constructor() {
    this.name = faker.name.firstName();

    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      logitude: parseFloat(faker.address.longitude()),
    };
  }
}
