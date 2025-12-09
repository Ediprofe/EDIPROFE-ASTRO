# 🔗 MCM y MCD

El **Mínimo Común Múltiplo (MCM)** y el **Máximo Común Divisor (MCD)** son herramientas esenciales para trabajar con fracciones, resolver problemas y simplificar expresiones.

---

## 📖 Máximo Común Divisor (MCD)

El **MCD** de dos o más números es el **mayor número que divide a todos** exactamente.

$$
\text{MCD}(a, b) = \text{mayor divisor común de } a \text{ y } b
$$

### Método usando factorización

1. Descomponer cada número en factores primos.
2. Tomar los **factores comunes** con el **menor exponente**.
3. Multiplicar esos factores.

### Ejemplo: MCD de 36 y 48

**Factorizaciones:**

$$
36 = 2^2 \times 3^2
$$

$$
48 = 2^4 \times 3
$$

**Factores comunes con menor exponente:**

* Factor $2$: menor exponente es $2$
* Factor $3$: menor exponente es $1$

$$
\text{MCD}(36, 48) = 2^2 \times 3 = 4 \times 3 = 12
$$

---

## 📖 Mínimo Común Múltiplo (MCM)

El **MCM** de dos o más números es el **menor número que es múltiplo de todos**.

$$
\text{MCM}(a, b) = \text{menor múltiplo común de } a \text{ y } b
$$

### Método usando factorización

1. Descomponer cada número en factores primos.
2. Tomar **todos los factores** con el **mayor exponente**.
3. Multiplicar esos factores.

### Ejemplo: MCM de 36 y 48

**Factorizaciones:**

$$
36 = 2^2 \times 3^2
$$

$$
48 = 2^4 \times 3
$$

**Todos los factores con mayor exponente:**

* Factor $2$: mayor exponente es $4$
* Factor $3$: mayor exponente es $2$

$$
\text{MCM}(36, 48) = 2^4 \times 3^2 = 16 \times 9 = 144
$$

---

## 📊 Comparación de métodos

| Concepto | MCM | MCD |
|----------|-----|-----|
| Factores | Todos | Solo comunes |
| Exponentes | Mayor | Menor |
| Resultado | Grande | Pequeño |

---

## 🔗 Relación entre MCM y MCD

Para dos números $a$ y $b$:

$$
a \times b = \text{MCM}(a, b) \times \text{MCD}(a, b)
$$

### Verificación con 36 y 48

$$
36 \times 48 = 1728
$$

$$
\text{MCM} \times \text{MCD} = 144 \times 12 = 1728 \quad \checkmark
$$

---

## ⚙️ Ejercicio 1 — MCD y MCM de 24 y 36

Calcula el MCD y MCM de $24$ y $36$.

### ✅ Solución

**Factorizaciones:**

$$
24 = 2^3 \times 3
$$

$$
36 = 2^2 \times 3^2
$$

**MCD (comunes con menor exponente):**

$$
\text{MCD}(24, 36) = 2^2 \times 3 = 4 \times 3 = 12
$$

**MCM (todos con mayor exponente):**

$$
\text{MCM}(24, 36) = 2^3 \times 3^2 = 8 \times 9 = 72
$$

$$
\boxed{\text{MCD} = 12, \quad \text{MCM} = 72}
$$

---

## ⚙️ Ejercicio 2 — MCD y MCM de 18, 24 y 30

Calcula el MCD y MCM de $18$, $24$ y $30$.

### ✅ Solución

**Factorizaciones:**

$$
18 = 2 \times 3^2
$$

$$
24 = 2^3 \times 3
$$

$$
30 = 2 \times 3 \times 5
$$

**MCD (comunes con menor exponente):**

* Factor $2$: todos tienen al menos $2^1$
* Factor $3$: todos tienen al menos $3^1$
* Factor $5$: no es común a todos

$$
\text{MCD}(18, 24, 30) = 2 \times 3 = 6
$$

**MCM (todos con mayor exponente):**

$$
\text{MCM}(18, 24, 30) = 2^3 \times 3^2 \times 5 = 8 \times 9 \times 5 = 360
$$

$$
\boxed{\text{MCD} = 6, \quad \text{MCM} = 360}
$$

---

## ⚙️ Ejercicio 3 — Problema de aplicación (MCD)

Una floristería tiene $60$ rosas y $84$ tulipanes. Quiere hacer ramos iguales usando todas las flores, sin que sobre ninguna. ¿Cuántos ramos puede hacer como máximo?

### ✅ Solución

Buscamos el MCD de $60$ y $84$:

$$
60 = 2^2 \times 3 \times 5
$$

$$
84 = 2^2 \times 3 \times 7
$$

$$
\text{MCD}(60, 84) = 2^2 \times 3 = 12
$$

Cada ramo tendrá:
* $60 \div 12 = 5$ rosas
* $84 \div 12 = 7$ tulipanes

$$
\boxed{12 \text{ ramos}}
$$

---

## ⚙️ Ejercicio 4 — Problema de aplicación (MCM)

Dos autobuses salen de la misma estación. El primero sale cada $12$ minutos y el segundo cada $20$ minutos. Si salen juntos a las 8:00 a.m., ¿cuándo volverán a coincidir?

### ✅ Solución

Buscamos el MCM de $12$ y $20$:

$$
12 = 2^2 \times 3
$$

$$
20 = 2^2 \times 5
$$

$$
\text{MCM}(12, 20) = 2^2 \times 3 \times 5 = 60 \text{ minutos}
$$

$$
\boxed{\text{Coincidirán a las 9:00 a.m.}}
$$

---
