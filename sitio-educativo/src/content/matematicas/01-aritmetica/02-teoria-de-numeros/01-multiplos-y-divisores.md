# 🔢 Múltiplos y Divisores

En este tema aprenderemos a identificar múltiplos y divisores de un número, conceptos fundamentales para entender cómo se relacionan los números entre sí.

---

## 📖 Múltiplos de un número

Un **múltiplo** de un número es el resultado de multiplicar ese número por cualquier número natural.

$$
\text{Múltiplo de } a = a \times n \quad \text{donde } n \in \mathbb{N}
$$

### Ejemplo

Los múltiplos de $3$ son:

$$
3 \times 1 = 3, \quad 3 \times 2 = 6, \quad 3 \times 3 = 9, \quad 3 \times 4 = 12, \ldots
$$

Por lo tanto:

$$
M(3) = \{3, 6, 9, 12, 15, 18, 21, \ldots\}
$$

### Propiedades de los múltiplos

* Todo número es múltiplo de sí mismo y de $1$.
* El cero es múltiplo de cualquier número: $0 = a \times 0$.
* Un número tiene **infinitos** múltiplos.

---

## 📖 Divisores de un número

Un **divisor** de un número es aquel que lo divide exactamente, es decir, con residuo cero.

$$
a \text{ es divisor de } b \quad \Leftrightarrow \quad b \div a = \text{entero} \quad (\text{residuo } 0)
$$

### Ejemplo

Los divisores de $12$ son aquellos que dividen exactamente a $12$:

| División | Resultado | ¿Es divisor? |
|----------|-----------|--------------|
| $12 \div 1$ | $12$ | ✓ |
| $12 \div 2$ | $6$ | ✓ |
| $12 \div 3$ | $4$ | ✓ |
| $12 \div 4$ | $3$ | ✓ |
| $12 \div 5$ | $2.4$ | ✗ |
| $12 \div 6$ | $2$ | ✓ |
| $12 \div 12$ | $1$ | ✓ |

Por lo tanto:

$$
D(12) = \{1, 2, 3, 4, 6, 12\}
$$

### Propiedades de los divisores

* El $1$ es divisor de todos los números.
* Todo número es divisor de sí mismo.
* Un número tiene una cantidad **finita** de divisores.

---

## 🔗 Relación entre múltiplos y divisores

Múltiplos y divisores son conceptos **recíprocos**:

$$
\text{Si } a \text{ es múltiplo de } b, \text{ entonces } b \text{ es divisor de } a.
$$

### Ejemplo

* $15$ es múltiplo de $5$ porque $15 = 5 \times 3$
* Por lo tanto, $5$ es divisor de $15$

---

## ⚙️ Ejercicio 1 — Encontrar múltiplos

Escribe los primeros $5$ múltiplos de $7$.

### ✅ Solución

$$
7 \times 1 = 7
$$

$$
7 \times 2 = 14
$$

$$
7 \times 3 = 21
$$

$$
7 \times 4 = 28
$$

$$
7 \times 5 = 35
$$

$$
\boxed{M(7) = \{7, 14, 21, 28, 35, \ldots\}}
$$

---

## ⚙️ Ejercicio 2 — Encontrar divisores

Encuentra todos los divisores de $18$.

### ✅ Solución

Probamos dividir $18$ entre cada número desde $1$ hasta $18$:

| División | ¿Exacta? |
|----------|----------|
| $18 \div 1 = 18$ | ✓ |
| $18 \div 2 = 9$ | ✓ |
| $18 \div 3 = 6$ | ✓ |
| $18 \div 6 = 3$ | ✓ |
| $18 \div 9 = 2$ | ✓ |
| $18 \div 18 = 1$ | ✓ |

$$
\boxed{D(18) = \{1, 2, 3, 6, 9, 18\}}
$$

---

## ⚙️ Ejercicio 3 — ¿Es múltiplo o divisor?

Determina si las siguientes afirmaciones son verdaderas o falsas:

1. $24$ es múltiplo de $6$
2. $7$ es divisor de $42$
3. $15$ es múltiplo de $4$

### ✅ Solución

**1.** $24 = 6 \times 4$ → **Verdadero** ✓

**2.** $42 \div 7 = 6$ (exacto) → **Verdadero** ✓

**3.** $15 \div 4 = 3.75$ (no exacto) → **Falso** ✗

---

## ⚙️ Ejercicio 4 — Divisores comunes

¿Cuáles son los divisores comunes de $12$ y $18$?

### ✅ Solución

**Divisores de 12:**

$$
D(12) = \{1, 2, 3, 4, 6, 12\}
$$

**Divisores de 18:**

$$
D(18) = \{1, 2, 3, 6, 9, 18\}
$$

**Divisores comunes:**

$$
D(12) \cap D(18) = \{1, 2, 3, 6\}
$$

$$
\boxed{\text{Divisores comunes: } 1, 2, 3, 6}
$$

---
