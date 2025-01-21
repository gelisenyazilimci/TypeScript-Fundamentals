# Functions

---

Şimdi örnek olarak bir fonksiyon yazalım. Bu fonksiyon, bizim için toplama işlemi yapsın.

```typescript
function toTotal(a, b, c) {
    let result = a + b + c; 
    return "Equals: " + result;
}

toTotal(10, 20, 30); 
```

Gördüğünüz gibi, yukarıda toplama işlemini yaptım. Ancak, "Bu JavaScript'ten farklı değil, ne fark yaratabiliriz ki?" diye düşünüyor olabilirsiniz.

```typescript
toTotal(10, 20, 30); 
```

Yukarıdaki ifadede sayı göndermek yerine bir **string** veya **boolean** ifade gönderseydik, fonksiyonumuz hata verecekti. Bunun önüne geçmek için ne yapabiliriz? TypeScript yazarken, yanlış türde bir değişken atamasını nasıl engelleyebiliriz? Bu sorular aklınıza gelebilir.

Aslında, önceki notlarımızda değişkenlere tip ataması yapıyorduk. Bunu fonksiyonlarda da uygulayabiliriz:

```typescript
function toTotal(a: number, b: number, c: number) {
    let result = a + b + c;
    return "Equals: " + result;
}

toTotal(10, 20, 30);
```

Yukarıdaki kod örneğinde gördüğünüz gibi, değişkenlerimizin tipini belirledikten sonra artık sayı yerine başka bir değer gönderemeyiz. Eğer sayı yerine bir **string** yazarsak, IDE bize hata gösterecektir!

Ek olarak, şunu belirtmek isterim: C# veya C++ gibi dillerde, bir fonksiyon oluştururken geri dönüş tipini de belirtmek zorundayız. Ancak, JavaScript'te bunu yapmayız. TypeScript sayesinde, bu özelliği kullanabiliriz:

```typescript
function toTotal(a: number, b: number, c: number): string {
    let result = a + b + c;
    return "Equals: " + result;
}

toTotal(10, 20, 30);
```

Yukarıdaki kodda, parantezin sonuna `:string` yazarak, fonksiyonun geri döndüreceği tipin **string** olduğunu belirttik. Eğer geri dönüş değeri istemiyorsanız ve yine de bir tip belirtmek istiyorsanız, `void` kullanabilirsiniz.


Eğer `toTotal` fonksiyonumuzun iki farklı işlem yapmasını ve 3. parametrenin isteğe bağlı olmasını isterseniz, bunu şu şekilde yazabilirsiniz:

```typescript
function toTotal(a: number, b: number, c?: number): string {
    let total = a + b;
    if (typeof c !== "undefined") {
        total += c;
    }
    return "Equals: " + total;
}

toTotal(10, 20, 30);
toTotal(10, 20);
```

Yukarıda, `c` parametresini isteğe bağlı yaptık. Fonksiyonumuz 2 veya 3 parametre ile çağrılabilir. Eğer 3. sayı `undefined` ise, `if` döngüsüne girilmeden iki sayının toplamı döner. Aksi takdirde, 3. sayı da toplama dahil edilir.

Eğer gönderilecek değerlerin sayısı belli değilse, bunu şu şekilde yazabilirsiniz:

```typescript
function toTotal(...a: number[]): string {
    let total = 0;

    if (a.length > 0) {
        for (let i = 0; i < a.length; i++) {
            total += a[i];
        }
        return "Equals: " + total;
    }
    return `This ${a} variable is undefined. Please send integer values.`;
}

toTotal(10, 20, 30);
toTotal(10, 20);
```

Bu şekilde, gönderilecek değerlerin sayısını bilmediğiniz durumlarda fonksiyonu kullanabilirsiniz.

Son olarak, bu fonksiyonu bir `arrow function` olarak şu şekilde yazabiliriz:

```typescript
const toTotal = (...a: number[]): string => {
    let total = 0;

    if (a.length > 0) {
        for (let i = 0; i < a.length; i++) {
            total += a[i];
        }
        return "Equals: " + total;
    }
    return `This ${a} variable is undefined. Please send integer values.`;
}

toTotal(10, 20, 30);
toTotal(10, 20);
```

Bu şekilde `arrow function` olarak da kullanabilirsiniz.