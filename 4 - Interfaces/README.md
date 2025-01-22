# Interfaces

---

Şimdi **Interface** konusunu ele alalım. Bunu anlamak için öncelikle şu soruyu kendimize sorabiliriz: **"Bir objenin yapısını nasıl belirleriz ve kontrol altına alırız?"**

JavaScript'te herhangi bir objenin yapısı üzerinde tam bir kontrolümüz olmaz. Yani bir objeye key-value çiftleri ekleyebilir ya da çıkarabiliriz. Ancak, TypeScript'te objelerin yapısını daha düzenli ve kontrollü bir şekilde yönetmek için **Interface** yapısını kullanabiliriz.

Basit bir örnekle başlayalım:

```typescript
interface User {
    name: string;
    age: number;
    isActive: boolean;
}
```

Yukarıda, bir `User` isimli interface tanımladık. Şimdi bunu bir obje ile kullanalım:

```typescript
const user: User = {
    name: "John",
    age: 25,
    isActive: true
};
```

Eğer bu objeye yukarıdaki tanıma uymayan bir değer eklemeye çalışırsak, TypeScript bize hata gösterecektir. Örneğin:

```typescript
const invalidUser: User = {
    name: "Jane",
    age: "25", // HATA: 'age' bir sayı olmalı.
    isActive: true
};
```

### Neden Interface Kullanıyoruz?

**Interface**'ler sayesinde:
1. Obje yapısını net bir şekilde tanımlayabiliriz.
2. Daha okunabilir ve sürdürülebilir bir kod yazabiliriz.
3. Birden fazla yerde aynı yapıyı tekrar tanımlamak zorunda kalmayız.

---

## Opsiyonel Özellikler

Bir objede bazı özelliklerin isteğe bağlı olmasını isteyebiliriz. Bunu, **opsiyonel özellikler** tanımlayarak yapabiliriz. Bunun için özellik adının sonuna `?` ekliyoruz:

```typescript
interface User {
    name: string;
    age?: number; // Bu özellik isteğe bağlı
    isActive: boolean;
}
```

Artık `age` özelliğini eklemeden de bir obje oluşturabiliriz:

```typescript
const user: User = {
    name: "Alice",
    isActive: false
};
```

---

## Readonly Özellikler

Bazı özelliklerin sadece okunabilir (readonly) olmasını isteyebiliriz. Yani, bir kez değer atandıktan sonra o değerin değiştirilmesini istemiyorsanız, `readonly` anahtar kelimesini kullanabilirsiniz:

```typescript
interface User {
    readonly id: number;
    name: string;
    isActive: boolean;
}
```

Bu tanıma göre, `id` özelliği sadece bir kez atanabilir:

```typescript
const user: User = {
    id: 1,
    name: "Charlie",
    isActive: true
};

// HATA: 'id' özelliğini değiştiremeyiz.
user.id = 2; 
```

---

## Fonksiyonları Interface İçinde Tanımlamak

Bir interface içinde fonksiyon tanımlamak da mümkündür. Örneğin:

```typescript
interface User {
    name: string;
    isActive: boolean;
    greet(): string;
}
```

Şimdi bu interface'i kullanarak bir obje oluşturabiliriz:

```typescript
const user: User = {
    name: "Daisy",
    isActive: true,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(user.greet()); // Çıktı: Hello, my name is Daisy
```

---

## Birden Fazla Interface'i Birleştirme

Birden fazla interface'i birleştirerek daha büyük bir yapı oluşturabiliriz. Bu işlem için **extend** özelliğini kullanıyoruz:

```typescript
interface Address {
    street: string;
    city: string;
}

interface User extends Address {
    name: string;
    age: number;
}
```

Artık `User` interface'i, `Address` interface'inden gelen özellikleri de içeriyor:

```typescript
const user: User = {
    name: "Eve",
    age: 28,
    street: "Main St",
    city: "New York"
};
```

---

## Interface ile Türleri Belirlemek

Interface, sadece objeler için değil, fonksiyonların imzasını tanımlamak için de kullanılabilir:

```typescript
interface Add {
    (a: number, b: number): number;
}

const add: Add = (x, y) => x + y;

console.log(add(5, 10)); // Çıktı: 15
```

Daha fazla detay için [typescript lang interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html) sayfasina bakmayı unutmayınız. 

---