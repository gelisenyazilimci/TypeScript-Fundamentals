### TypeScript'te Class Mantığı

TypeScript, C# ve JavaScript gibi dillerdeki sınıf (class) yapılarını birleştirerek daha güçlü bir tip kontrolü ve nesne yönelimli programlama (OOP) deneyimi sunar. Class’lar, bir objenin yapısını tanımlamak ve metodlarını belirlemek için kullanılır. TypeScript'te class'lar, C#’taki yapıya oldukça benzer şekilde tasarlanmıştır, ancak JavaScript gibi dinamik yönleri de içerir.

#### Basit Class Tanımı
TypeScript'te bir sınıf şöyle tanımlanır:

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person = new Person("John", 25);
console.log(person.greet());
```

### `extends` ve `implements`

TypeScript'te class'lar:
1. **`extends`**: Başka bir class'ı miras alabilir. (C#’taki inheritance gibi)
2. **`implements`**: Bir interface'i uygulayabilir. (C#’taki interface implementation gibi)

---

#### `extends` ile Miras (Inheritance)

Bir sınıf, başka bir sınıfın özelliklerini ve metodlarını devralabilir. Bu, temel sınıfın işlevselliğini genişletmek için kullanılır.

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

class Dog extends Animal {
    bark(): string {
        return `${this.name} says woof!`;
    }
}

const dog = new Dog("Buddy");
console.log(dog.move()); // Buddy is moving.
console.log(dog.bark()); // Buddy says woof!
```

---

#### `implements` ile Interface Uygulama

Bir sınıfın, bir interface'te tanımlanan özellikleri ve metodları uygulamasını zorunlu kılar. Interface sadece bir yapı tanımlar; bu yapıyı uygulama görevi sınıfa bırakılır.

```typescript
interface CanFly {
    fly(): string;
}

interface CanSwim {
    swim(): string;
}

class Bird implements CanFly {
    fly(): string {
        return "Bird is flying!";
    }
}

class Duck implements CanFly, CanSwim {
    fly(): string {
        return "Duck is flying!";
    }

    swim(): string {
        return "Duck is swimming!";
    }
}

const bird = new Bird();
console.log(bird.fly()); // Bird is flying!

const duck = new Duck();
console.log(duck.fly()); // Duck is flying!
console.log(duck.swim()); // Duck is swimming!
```

---

### Özet
- **`extends`**: Bir sınıfın başka bir sınıfın özelliklerini ve metodlarını miras almasını sağlar.
- **`implements`**: Bir sınıfın belirli bir interface'in tanımladığı kurallara uygun olmasını sağlar.
