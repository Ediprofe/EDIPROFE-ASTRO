# 📋 Criterios de Divisibilidad

Los criterios de divisibilidad son reglas que nos permiten saber si un número es divisible entre otro **sin necesidad de hacer la división**. Son muy útiles para simplificar fracciones y encontrar factores.

---

## 📖 ¿Qué significa "divisible"?

Un número $a$ es **divisible** entre $b$ cuando la división $a \div b$ es exacta (residuo cero).

$$
a \text{ es divisible entre } b \quad \Leftrightarrow \quad a = b \times k \quad (k \in \mathbb{Z})
$$

---

## 🔢 Criterio de divisibilidad por 2

Un número es divisible por $2$ si su **última cifra es par** ($0, 2, 4, 6, 8$).

| Número | Última cifra | ¿Divisible por 2? |
|--------|--------------|-------------------|
| $124$ | $4$ | ✓ |
| $357$ | $7$ | ✗ |
| $1000$ | $0$ | ✓ |

---

## 🔢 Criterio de divisibilidad por 3

Un número es divisible por $3$ si la **suma de sus cifras** es múltiplo de $3$.

### Ejemplo

¿Es $243$ divisible por $3$?

$$
2 + 4 + 3 = 9
$$

Como $9$ es múltiplo de $3$, entonces $243$ es divisible por $3$. ✓

### Contraejemplo

¿Es $125$ divisible por $3$?

$$
1 + 2 + 5 = 8
$$

Como $8$ no es múltiplo de $3$, entonces $125$ no es divisible por $3$. ✗

---

## 🔢 Criterio de divisibilidad por 4

Un número es divisible por $4$ si sus **dos últimas cifras** forman un número divisible por $4$.

### Ejemplo

¿Es $1324$ divisible por $4$?

$$
24 \div 4 = 6 \quad \text{(exacto)}
$$

Sí, $1324$ es divisible por $4$. ✓

---

## 🔢 Criterio de divisibilidad por 5

Un número es divisible por $5$ si su **última cifra es $0$ o $5$**.

| Número | Última cifra | ¿Divisible por 5? |
|--------|--------------|-------------------|
| $45$ | $5$ | ✓ |
| $120$ | $0$ | ✓ |
| $73$ | $3$ | ✗ |

---

## 🔢 Criterio de divisibilidad por 6

Un número es divisible por $6$ si es divisible **por $2$ y por $3$** simultáneamente.

### Ejemplo

¿Es $132$ divisible por $6$?

* ¿Por $2$? Última cifra $= 2$ (par) → ✓
* ¿Por $3$? $1 + 3 + 2 = 6$ (múltiplo de $3$) → ✓

Como cumple ambos criterios: $132$ es divisible por $6$. ✓

---

## 🔢 Criterio de divisibilidad por 9

Un número es divisible por $9$ si la **suma de sus cifras** es múltiplo de $9$.

### Ejemplo

¿Es $729$ divisible por $9$?

$$
7 + 2 + 9 = 18
$$

Como $18$ es múltiplo de $9$, entonces $729$ es divisible por $9$. ✓

---

## 🔢 Criterio de divisibilidad por 10

Un número es divisible por $10$ si su **última cifra es $0$**.

| Número | ¿Divisible por 10? |
|--------|-------------------|
| $250$ | ✓ |
| $305$ | ✗ |

---

## 📊 Tabla Resumen

| Divisor | Criterio |
|---------|----------|
| $2$ | Última cifra par |
| $3$ | Suma de cifras múltiplo de $3$ |
| $4$ | Últimas dos cifras divisibles por $4$ |
| $5$ | Última cifra $0$ o $5$ |
| $6$ | Divisible por $2$ y por $3$ |
| $9$ | Suma de cifras múltiplo de $9$ |
| $10$ | Última cifra $0$ |

---

## ⚙️ Ejercicio 1 — Aplicar criterios

Determina si $540$ es divisible por $2$, $3$, $5$ y $9$.

### ✅ Solución

**Por 2:** Última cifra $= 0$ (par) → ✓

**Por 3:** $5 + 4 + 0 = 9$ (múltiplo de $3$) → ✓

**Por 5:** Última cifra $= 0$ → ✓

**Por 9:** $5 + 4 + 0 = 9$ (múltiplo de $9$) → ✓

$$
\boxed{540 \text{ es divisible por } 2, 3, 5 \text{ y } 9}
$$

---

## ⚙️ Ejercicio 2 — Identificar divisibilidad

¿Por cuáles de los siguientes números es divisible $1260$: $2, 3, 4, 5, 6, 9, 10$?

### ✅ Solución

| Divisor | Verificación | ¿Divisible? |
|---------|--------------|-------------|
| $2$ | Última cifra $= 0$ | ✓ |
| $3$ | $1+2+6+0 = 9$ | ✓ |
| $4$ | $60 \div 4 = 15$ | ✓ |
| $5$ | Última cifra $= 0$ | ✓ |
| $6$ | Por $2$ ✓ y por $3$ ✓ | ✓ |
| $9$ | $1+2+6+0 = 9$ | ✓ |
| $10$ | Última cifra $= 0$ | ✓ |

$$
\boxed{1260 \text{ es divisible por todos}}
$$

---

## ⚙️ Ejercicio 3 — Encontrar el número

Si $42\Box$ es divisible por $3$, ¿qué valores puede tomar $\Box$?

### ✅ Solución

Para que sea divisible por $3$, la suma de cifras debe ser múltiplo de $3$:

$$
4 + 2 + \Box = 6 + \Box
$$

Los valores que hacen $(6 + \Box)$ múltiplo de $3$ son:

* $6 + 0 = 6$ ✓
* $6 + 3 = 9$ ✓
* $6 + 6 = 12$ ✓
* $6 + 9 = 15$ ✓

$$
\boxed{\Box \in \{0, 3, 6, 9\}}
$$

---
