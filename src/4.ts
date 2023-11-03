class Key {
  private signature: number = Math.random();
  getSignature(): number {
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

  public comeIn(person: Person): void {
    if (this.door) {
      console.log("add tenant");
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      console.log("door open");
      this.door = true;
    }
    console.log("door close");
    this.door = false;
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
