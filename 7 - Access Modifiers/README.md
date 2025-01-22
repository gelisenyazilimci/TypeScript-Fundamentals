# TypeScript’te Access Modifiers (Erişim Belirleyiciler)

---

Access Modifiers, TypeScript’te sınıf üyelerinin (özellikler ve metodlar) erişilebilirliğini kontrol eder. C#’taki gibi public, private, ve protected erişim belirleyicileri kullanılır. Bu belirleyiciler, kodun daha güvenli ve düzenli olmasını sağlar.

---

## 1. Public (Varsayılan)
- Sınıfın her yerinden erişilebilir. 
- Eğer bir özelliğe erişim belirleyici eklenmezse varsayılan olarak `public` kabul edilir.

```typescript
class Car {
    public brand: string; // Varsayılan olarak public
    public model: string;

    constructor(brand: string, model:string) {
        this.brand = brand;
        this.model = model;
    }
    
    public getDetails (): string { 
        return `Car: ${this.brand}, Model: ${this.model}`
    }
}

const car = new Car("Toyota", "Corolla");
console.log(car.brand); // Toyota
console.log(car.getDetails()); // Car: Toyota, Model: Corolla
```
----

## 2 Private
- Sadece tanımlandığı sınıf içinde erişilebilir. 
- Dışarıdan veya alt sınıflardan erişim mümkün değildir.

```typescript
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    public getBalance(): number {
        return this.balance; // Sadece bu sınıf içinde erişilebilir
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500

// account.balance = 2000; // HATA: 'balance' özelliği private olduğu için erişilemez

}
```

---

## 3. Protected

- Sadece tanımlandığı sınıf ve ondan türetilen alt sınıflar tarafından erişilebilir. 
- Private'dan farklı olark, miras alınan sınıflarda kullanılabilir. 
```typescript
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected getName(): string {
        return this.name;
    }
}

class Dog extends Animal {
    public bark(): string {
        return `${this.getName()} says woof!`; // Protected özelliğe erişim
    }
}

const dog = new Dog("Buddy");
console.log(dog.bark()); // Buddy says woof!

// console.log(dog.name); // HATA: 'name' özelliği protected olduğu için erişilemez
```

---

## 4. Readonly

- Özelliklere sadece ilk atma sırasında veya constructor içinde değer atanabilir. 
- Daha sonra bu özellik değişmez.

```typescript
class Book {
    public readonly title: string;

    constructor(title: string) {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }
}

const book = new Book("TypeScript Handbook");
console.log(book.getTitle()); // TypeScript Handbook

// book.title = "Another Book"; // HATA: 'title' özelliği readonly olduğu için değiştirilemez
```

## 5. Access Modifiers ile Constructor Parametreleri

TypeScript, constructor parametrelerinde erişim belirleyicilerini doğrudan tanımlamayı destekler. Bu yöntem, daha az kodla aynı işlevselliği sağlar.

```typescript
class Employee {
    constructor(public name: string, private salary: number) {}

    public getSalary(): number {
        return this.salary; // Private olduğu için sadece sınıf içinde erişilebilir
    }
}

const employee = new Employee("John", 5000);
console.log(employee.name); // John
console.log(employee.getSalary()); // 5000

// console.log(employee.salary); // HATA: 'salary' özelliği private olduğu için erişilemez
```
---