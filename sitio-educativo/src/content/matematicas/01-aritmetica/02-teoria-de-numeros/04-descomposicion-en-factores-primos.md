# 🧩 Descomposición en Factores Primos

Todo número compuesto puede expresarse como un **producto de números primos**. Este proceso se llama **factorización prima** o **descomposición en factores primos**.

---

## 📖 Teorema Fundamental de la Aritmética

> Todo número natural mayor que $1$ puede escribirse de manera **única** como producto de números primos (salvo el orden de los factores).

$$
n = p_1^{a_1} \times p_2^{a_2} \times p_3^{a_3} \times \ldots
$$

donde $p_1, p_2, p_3, \ldots$ son primos distintos y $a_1, a_2, a_3, \ldots$ son sus exponentes.

---

## 🧮 Método de descomposición

### Procedimiento

1. Dividir el número entre el **menor primo posible**.
2. Dividir el cociente entre el menor primo posible.
3. Repetir hasta obtener cociente $1$.
4. El resultado es el producto de todos los primos usados.

### Ejemplo: Descomponer $60$

| Número | ÷ Primo | Cociente |
|--------|---------|----------|
| $60$ | $2$ | $30$ |
| $30$ | $2$ | $15$ |
| $15$ | $3$ | $5$ |
| $5$ | $5$ | $1$ |

Por lo tanto:

$$
60 = 2 \times 2 \times 3 \times 5 = 2^2 \times 3 \times 5
$$

---

## 📝 Notación con exponentes

Es conveniente escribir la factorización usando **potencias**:

| Número | Factorización |
|--------|---------------|
| $12$ | $2^2 \times 3$ |
| $45$ | $3^2 \times 5$ |
| $72$ | $2^3 \times 3^2$ |
| $100$ | $2^2 \times 5^2$ |

---

## ⚙️ Ejercicio 1 — Factorizar $84$

Descompón $84$ en factores primos.

### ✅ Solución

| Número | ÷ Primo | Cociente |
|--------|---------|----------|
| $84$ | $2$ | $42$ |
| $42$ | $2$ | $21$ |
| $21$ | $3$ | $7$ |
| $7$ | $7$ | $1$ |

$$
\boxed{84 = 2^2 \times 3 \times 7}
$$

---

## ⚙️ Ejercicio 2 — Factorizar $180$

Descompón $180$ en factores primos.

### ✅ Solución

| Número | ÷ Primo | Cociente |
|--------|---------|----------|
| $180$ | $2$ | $90$ |
| $90$ | $2$ | $45$ |
| $45$ | $3$ | $15$ |
| $15$ | $3$ | $5$ |
| $5$ | $5$ | $1$ |

$$
\boxed{180 = 2^2 \times 3^2 \times 5}
$$

---

## ⚙️ Ejercicio 3 — Factorizar $126$

Descompón $126$ en factores primos.

### ✅ Solución

| Número | ÷ Primo | Cociente |
|--------|---------|----------|
| $126$ | $2$ | $63$ |
| $63$ | $3$ | $21$ |
| $21$ | $3$ | $7$ |
| $7$ | $7$ | $1$ |

$$
\boxed{126 = 2 \times 3^2 \times 7}
$$

---

## ⚙️ Ejercicio 4 — Verificar factorización

Verifica que $2^3 \times 5^2 = 200$.

### ✅ Solución

$$
2^3 \times 5^2 = 8 \times 25 = 200
$$

$$
\boxed{\text{Verificado: } 200 = 2^3 \times 5^2}
$$

---

## ⚙️ Ejercicio 5 — Encontrar el número

¿Qué número tiene la factorización $2 \times 3^2 \times 5$?

### ✅ Solución

$$
2 \times 3^2 \times 5 = 2 \times 9 \times 5 = 90
$$

$$
\boxed{2 \times 3^2 \times 5 = 90}
$$

---

## 🔗 Aplicaciones de la factorización

La descomposición en factores primos es fundamental para:

* Calcular el **MCM** (Mínimo Común Múltiplo)
* Calcular el **MCD** (Máximo Común Divisor)
* Simplificar **fracciones**
* Resolver problemas de **divisibilidad**

---
