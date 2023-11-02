class Key {
  private signature: number = Math.random();
  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  public comeIn(person: Person): boolean {
    if (this.door) {
      console.log("add tenant");
      this.tenants.push(person);
      return (this.door = false);
    }
    return (this.door = false);
  }

  public abstract openDoor(key: Key): boolean;
}
class MyHouse extends House {
  public openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      console.log("door open");
      return (this.door = true);
    }
    console.log("door close");
    return (this.door = false);
  }
}

const key = new Key();
const key2 = new Key();
const aperson = new Person(key);
const house = new MyHouse(key);

house.openDoor(aperson.getKey());

house.comeIn(aperson);
console.log(house);

export {};
