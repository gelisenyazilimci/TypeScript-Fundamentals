### TypeScript’te Property

TypeScript'te **property**'ler, bir sınıfın değişkenlerini temsil eder ve genellikle private, protected veya public olarak tanımlanır. **Getter** ve **Setter** metodlarıyla property'lerin erişimi ve değiştirilmesi kontrol edilebilir.

---

### Getter ve Setter Kullanımı

Getter ve Setter metodları, bir property'e erişimi ve değer atamayı daha güvenli ve kontrol edilebilir hale getirir. Aşağıdaki örnek üzerinden açıklayalım:

```typescript
class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // Getter
    public get name(): string {
        return this._name;
    }

    // Setter
    public set name(newName: string) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Name cannot be empty.");
        }
    }
}

const person = new Person("Alice");
console.log(person.name); // Getter çağrılır, çıktı: Alice

person.name = "Bob"; // Setter çağrılır, _name: Bob olur
console.log(person.name); // Getter çağrılır, çıktı: Bob

person.name = ""; // Setter çağrılır, ancak _name değişmez
console.log(person.name); // Getter çağrılır çıktı: Name cannot be empty
```

---

### **Getter ve Setter Özellikleri**
1. **Getter (`get`)**:
    - Bir property'nin değerine erişmek için  
    kullanılır.
    - Metot gibi çağrılmaz; doğrudan property gibi kullanılır.
    - Genellikle property'yi `readonly` hale getirmek veya değer üzerinde işlem yapmak için kullanılır.

   **Yukarıdaki örnekte:**
    - `person.name` ifadesi çağrıldığında `get name()` metodu devreye girer.
    - Değeri `_name` üzerinden döner.

2. **Setter (`set`)**:
    - Bir property'nin değerini değiştirmek için kullanılır.
    - Metot gibi çağrılmaz; doğrudan property gibi atanır.
    - Değişiklik öncesinde kontrol yapmak veya işleme tabi tutmak için uygundur.

   **Yukarıdaki örnekte:**
    - `person.name = "Bob"` ifadesi çağrıldığında `set name()` metodu devreye girer.
    - Yeni değer kontrol edilip `_name`'e atanır.

---

### Özet
- **Getter ve Setter**:
    - Property'leri daha kontrollü bir şekilde yönetmek için kullanılır.
    - Bir property'e doğrudan erişmek yerine metot mantığı ile çalışır.
- **Getter (`get`)**: Değerin alınmasını sağlar.
- **Setter (`set`)**: Değerin kontrol edilerek atanmasını sağlar.