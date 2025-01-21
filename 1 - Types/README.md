# TypeScript - Types Rehberi

---

## Primitif Tipler
- **`number`**: Sayısal değerler (tam sayı ve ondalıklı).
  ```typescript
  let age: number = 25;
  ```
- **`string`**: Metin değerleri.
  ```typescript
  let name: string = "John";
  ```
- **`boolean`**: Mantıksal değerler (`true` / `false`).
  ```typescript
  let isActive: boolean = true;
  ```
- **`null` / `undefined`**: Boş veya tanımsız değerler.

---

## Referans Tipler
- **Array**: Aynı tipte birden çok değer saklar.
  ```typescript
  let numbers: number[] = [1, 2, 3];
  ```
- **Tuple**: Belirli tip ve sırada değer saklar.
  ```typescript
  let person: [string, number] = ["Alice", 30];
  ```
- **Object**: Anahtar-değer yapısı. *
    ```typescript
    let user: {id: number; name: string } = {id: 1, name: "Rems"};
    ```

---

## Özel Tipler
- **`any`**: Herhangi bir tip olabilir (kullanımı önerilmez).
  ```typescript
  let data: any = "Hello";
  ```
- **`unknown`**: Güvenli "her tip". * 
  ```typescript
  let input: unknown;
  ```
- **`void`**: Değer döndürmeyen fonksiyonlar. * (ileride tekrar değinecem.)
  ```typescript
  function log(message: string): void {
    console.log(message);
  }
  ```
- **`never`**: Asla bir şey döndürmeyen (hata fırlatan) durumlar.  * (ileride tekrar değinecem.)
  ```typescript
  function error(message: string): never {
    throw new Error(message);
  }
  ```

---

## Union ve Intersection ** 
- **Union**: Birden fazla tip olabilir. Aşağıdaki gibi fazla tip yaptıysanız sonradan değerini atyabilirsiniz.
  ```typescript
  let id: number | string = 101;
  id = "1"; 
  ```
- **Intersection**: Birden fazla tipin birleşimi.
  ```typescript
  type Admin = { isAdmin: boolean };
  type User = { name: string };

  let admin: Admin & User = { isAdmin: true, name: "Alice" };
  ```

---

## Type Alias ve Interface **
- **Type Alias**: Tip kısaltmaları.
  ```typescript
  type ID = number | string;
  let userId: ID = 123;
  ```
- **Interface**: Objelerin yapısını tanımlar.
  ```typescript
  interface User {
    id: number;
    name: string;
  }
  let user: User = { id: 1, name: "Alice" };
  ```

---

## Type Assertion
- Bir değişkenin tipini belirlemek.
  ```typescript
  let value: unknown = "Hello";
  let length: number = (value as string).length;
  ```

