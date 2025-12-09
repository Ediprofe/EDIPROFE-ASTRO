# 🔍 Números Primos y Compuestos

Ahora que conocemos los divisores, podemos clasificar los números naturales según cuántos divisores tienen. Esta clasificación es clave para la factorización.

---

## 📖 Números Primos

Un número es **primo** si tiene **exactamente dos divisores**: el $1$ y él mismo.

$$
\text{Número primo: } D(p) = \{1, p\}
$$

### Ejemplos de números primos

| Número | Divisores | ¿Es primo? |
|--------|-----------|------------|
| $2$ | $\{1, 2\}$ | ✓ |
| $3$ | $\{1, 3\}$ | ✓ |
| $5$ | $\{1, 5\}$ | ✓ |
| $7$ | $\{1, 7\}$ | ✓ |
| $11$ | $\{1, 11\}$ | ✓ |

### Propiedades de los primos

* El $2$ es el **único primo par**.
* El $1$ **no es primo** (solo tiene un divisor).
* Hay **infinitos** números primos.

---

## 📖 Números Compuestos

Un número es **compuesto** si tiene **más de dos divisores**.

$$
\text{Número compuesto: } |D(n)| > 2
$$

### Ejemplos de números compuestos

| Número | Divisores | ¿Es compuesto? |
|--------|-----------|----------------|
| $4$ | $\{1, 2, 4\}$ | ✓ |
| $6$ | $\{1, 2, 3, 6\}$ | ✓ |
| $9$ | $\{1, 3, 9\}$ | ✓ |
| $12$ | $\{1, 2, 3, 4, 6, 12\}$ | ✓ |

### Propiedad clave

Todo número compuesto puede expresarse como **producto de números primos**.

---

## 🔢 Clasificación de los números naturales

| Categoría | Descripción | Ejemplos |
|-----------|-------------|----------|
| Ni primo ni compuesto | $1$ (solo un divisor) | $1$ |
| Primo | Exactamente 2 divisores | $2, 3, 5, 7, 11, 13$ |
| Compuesto | Más de 2 divisores | $4, 6, 8, 9, 10, 12$ |

---

## 🧮 Criba de Eratóstenes

Es un método antiguo para encontrar todos los primos hasta un número dado.

### Procedimiento

1. Escribir los números del $2$ hasta $n$.
2. Tachar los múltiplos de $2$ (excepto el $2$).
3. Tachar los múltiplos de $3$ (excepto el $3$).
4. Continuar con el siguiente número no tachado.
5. Los números que quedan sin tachar son **primos**.

### Ejemplo: Primos hasta 30

Después de aplicar la criba:

$$
\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29\}
$$

---

## ⚙️ Ejercicio 1 — Identificar primos y compuestos

Clasifica los siguientes números como primos o compuestos: $15$, $17$, $21$, $23$, $25$.

### ✅ Solución

| Número | Divisores | Clasificación |
|--------|-----------|---------------|
| $15$ | $\{1, 3, 5, 15\}$ | Compuesto |
| $17$ | $\{1, 17\}$ | Primo |
| $21$ | $\{1, 3, 7, 21\}$ | Compuesto |
| $23$ | $\{1, 23\}$ | Primo |
| $25$ | $\{1, 5, 25\}$ | Compuesto |

---

## ⚙️ Ejercicio 2 — Primos entre 40 y 60

Encuentra todos los números primos entre $40$ y $60$.

### ✅ Solución

Verificamos cada número:

| Número | ¿Es primo? | Justificación |
|--------|------------|---------------|
| $41$ | ✓ | Solo divisible por $1$ y $41$ |
| $43$ | ✓ | Solo divisible por $1$ y $43$ |
| $47$ | ✓ | Solo divisible por $1$ y $47$ |
| $53$ | ✓ | Solo divisible por $1$ y $53$ |
| $59$ | ✓ | Solo divisible por $1$ y $59$ |

$$
\boxed{\text{Primos entre 40 y 60: } 41, 43, 47, 53, 59}
$$

---

## ⚙️ Ejercicio 3 — ¿Es primo?

Determina si $91$ es primo o compuesto.

### ✅ Solución

Probamos dividir entre primos pequeños:

* $91 \div 2 = 45.5$ ✗
* $91 \div 3 = 30.33...$ ✗
* $91 \div 5 = 18.2$ ✗
* $91 \div 7 = 13$ ✓

Como $91 = 7 \times 13$, tiene más de dos divisores.

$$
\boxed{91 \text{ es compuesto}}
$$

---

## ⚙️ Ejercicio 4 — Suma de primos

Expresa $30$ como suma de dos números primos.

### ✅ Solución

Probamos combinaciones:

* $30 = 7 + 23$ ✓ (ambos son primos)
* $30 = 11 + 19$ ✓ (ambos son primos)
* $30 = 13 + 17$ ✓ (ambos son primos)

$$
\boxed{30 = 7 + 23 = 11 + 19 = 13 + 17}
$$

---
