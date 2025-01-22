# TypeScript'te Objeler

---

TypeScript'te objeler, JavaScript'teki gibi veri depolamak için kullanılır. Ancak, TypeScript ile birlikte gelen tip güvenliği, objelerin yapısını ve türlerini daha iyi kontrol etmemizi sağlar. Bu, hataların erken fark edilmesine ve daha güvenilir kod yazılmasına olanak tanır.

---

## Temel Obje Tanımlama

Bir objeyi, TypeScript'te bir type veya **interface** kullanarak tanımlayabiliriz.

```typescript
const person: { name: string; age: number } = {
    name: "John",
    age: 25,
};

console.log(`${person.name} is ${person.age} years old.`);
```
Burada `person` objesinin `name` veya `age` gibi belirtili özelliklere sahip olduğunu belirtik. Yanlış türde veri atandığında TypeScript hata verir. 

---

## Obje Tipini Tanımlamak: `type` ve `interface`

Bir objenin yapısını tekrar tekrar yazmamak için type veya interface tanımlayabiliriz.

`type` Kullanımı

```typescript
type Person = { 
    name: string; 
    age: number; 
};

const person:Person = {
    name: "John",
    age: 25,
};
```

`interface` Kullanımı

```typescript
interface Person {
    name: string;
    age: number;
    greet():Person;
}

const person: Person = {
    name: "John",
    age: 25,
    greet(): Person {
        return `Hello my name is ${this.name}`;
    }
};

console.log(person.greet());
```

--- 

### Class ile Obje Üretimi

Class'lar, obje oluşturmanın bir başka yoludur. Class’lar ile obje yapısını ve metodlarını bir araya getirebiliriz.

```typescript
class Animal {
    name:string ;

    constructor(name:string) {
        this.name = name;
    }
    speak(): string {
        return `${this.name} makes a noise`;
    }
}

const dog: Animal = new Animal("Dog");
console.log(dog.speak());
```
---

### Interface ile Birden Fazla Obje Yapısı
Bir sınıf, birden fazla interface’i uygulayarak birden fazla özellik kazanabilir.

```typescript

interface Flyable {
    fly(): string;
}
interface Swimable {
    swim(): string;
}
class Bird implements Flyable, Swimable {
    fly(): string {
        return "Bird is flying!";
    }

    swim(): string {
        return "Bird is swimming!";
    }
}

const bird = new Bird();
console.log(bird.fly());
console.log(bird.swim());
```

### Objeler ve Miras (Inheritance)

Miras yoluyla, bir sınıfın özelliklerini ve metodlarını yeni bir sınıfta yeniden kullanabiliriz.

```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): string {
        return `${this.name} is moving.`;
    }
}

class Cat extends Animal {
    meow(): string {
        return `${this.name} says meow!`;
    }
}

const cat = new Cat("Kitty");
console.log(cat.move()); // Kitty is moving.
console.log(cat.meow()); // Kitty says meow!

```