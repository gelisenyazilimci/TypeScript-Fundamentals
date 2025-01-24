### TypeScript’te Modules (Modüller)

**Modüller**, kodunuzu daha iyi organize etmek ve yeniden kullanılabilir hale getirmek için kullanılan yapılar sağlar. TypeScript’te modüller, farklı dosyalarda yer alan kodları birbirinden bağımsız hale getirir ve gerektiğinde bunları bir araya getirmeyi kolaylaştırır.

---

### 1. **Module Export (Dışa Aktarma)**

Bir dosyada tanımlanan sınıflar, fonksiyonlar, değişkenler veya sabitler başka dosyalarda kullanılabilir hale getirilir. Bunu yapmak için **`export`** anahtar kelimesi kullanılır.

```typescript
// animal.ts
export class Animal {
    constructor(public name: string) {}

    move(): string {
        return `${this.name} is moving.`;
    }
}
```

---

### 2. **Module Import (İçe Aktarma)**

Başka bir dosyada tanımlanmış olan modülleri kullanmak için **`import`** anahtar kelimesi kullanılır.

```typescript
// main.ts
import { Animal } from "./animal";

const dog = new Animal("Dog");
console.log(dog.move()); // Dog is moving.
```

- **`import { ... }`**: Sadece belirtilen öğeleri içe aktarır.
- **`import * as ...`**: Tüm modülü bir isim alanı olarak içe aktarır.
- **`import default`**: Modülden tek bir varsayılan öğe içe aktarır (aşağıda açıklanmıştır).

---

### 3. **Default Export**

Bir dosyada yalnızca bir öğenin dışa aktarılması gerektiğinde **`default`** kullanılır.

```typescript
// math.ts
export default class MathUtils {
    static add(a: number, b: number): number {
        return a + b;
    }
}
```

```typescript
// main.ts
import MathUtils from "./math";

console.log(MathUtils.add(5, 10)); // 15
```

- **`export default`**: Sadece bir tane varsayılan öğe dışa aktarabilirsiniz.
- **`import`**: Default olarak tanımlanan öğeyi istediğiniz isimle içe aktarabilirsiniz.

---

### 4. **Export ve Import ile Birlikte Kullanım**

Bir dosyada hem `default` hem de isimlendirilmiş öğeler dışa aktarılabilir.

```typescript
// utility.ts
export default function greet(name: string): string {
    return `Hello, ${name}!`;
}

export const PI = 3.14;
export function square(x: number): number {
    return x * x;
}
```

```typescript
// main.ts
import greet, { PI, square } from "./utility";

console.log(greet("Alice")); // Hello, Alice!
console.log(PI); // 3.14
console.log(square(5)); // 25
```

---

### 5. **Namespace Import (Tüm Modülü İçeri Alma)**

Bir modülde birden fazla dışa aktarılan öğe varsa, hepsini bir isim alanı (namespace) ile içe alabilirsiniz.

```typescript
// shapes.ts
export const circle = "Circle";
export const square = "Square";
export const triangle = "Triangle";
```

```typescript
// main.ts
import * as Shapes from "./shapes";

console.log(Shapes.circle); // Circle
console.log(Shapes.square); // Square
console.log(Shapes.triangle); // Triangle
```

---

### 6. **Re-Export (Yeniden Dışa Aktarma)**

Bir modüldeki öğeleri doğrudan başka bir modülden yeniden dışa aktarabilirsiniz. Bu, birden fazla modülü birleştirirken kullanışlıdır.

```typescript
// utils.ts
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
```

```typescript
// index.ts
export * from "./utils"; // utils.ts içindeki her şeyi dışa aktar
```

```typescript
// main.ts
import { add, subtract } from "./index";

console.log(add(10, 5)); // 15
console.log(subtract(10, 5)); // 5
```

---

### Özet

1. **`export`**: Bir dosyadan öğeleri dışa aktarmak için kullanılır.
    - `export` (isimlendirilmiş) ve `export default` (varsayılan) olarak ikiye ayrılır.
2. **`import`**: Dışa aktarılan öğeleri içe aktarmak için kullanılır.
    - Belirtilen öğeler, bir namespace veya varsayılan olarak alınabilir.
3. **Namespace Import**: Tüm bir modül içe alınarak isim alanı olarak kullanılabilir.
4. **Re-Export**: Bir modülden gelen öğeleri başka bir modülden yeniden dışa aktarabilirsiniz.
