---
title: Suma y resta en notación científica
---

## ➕ **Suma y resta en notación científica**

En notación científica, **no se pueden sumar o restar directamente** números si sus potencias de 10 son diferentes.  
Primero es necesario que ambos números tengan **el mismo exponente**.

---

### ⚙️ **Regla general**

Para sumar o restar:

1. **Igualar los exponentes** de 10 (ajustando uno de los números).  
2. **Operar los números base** (sumar o restar).  
3. **Ajustar el resultado final** para que el número base quede entre 1 y 9.  
4. **Conservar el exponente común** (modificado si el ajuste lo requiere).

$$
(a\times10^n) + (b\times10^n) = (a+b)\times10^n
$$

$$
(a\times10^n) - (b\times10^n) = (a-b)\times10^n
$$

---

### ✏️ **Ejemplo 1: Suma con exponentes distintos**

Suma los siguientes números:

$$
(3.2\times10^5) + (4.8\times10^4)
$$

**Solución paso a paso:**

1. Los exponentes son diferentes ($5$ y $4$).  
   Igualamos los exponentes expresando ambos con $10^5$:

   $$
   4.8\times10^4 = 0.48\times10^5
   $$

2. Sumamos los números base:

   $$
   3.2\times10^5 + 0.48\times10^5 = (3.68)\times10^5
   $$

3. El número base $3.68$ ya está entre 1 y 9,  
   así que el resultado final es:

   $$
   \boxed{3.68\times10^5}
   $$

---

### ✏️ **Ejemplo 2: Resta con números pequeños**

Resta los siguientes números:

$$
(2.3\times10^{-3}) - (1.1\times10^{-2})
$$

**Solución paso a paso:**

1. Igualamos los exponentes.  
   Ambos deben tener $10^{-2}$, así que reescribimos:

   $$
   2.3\times10^{-3} = 0.23\times10^{-2}
   $$

2. Restamos los números base:

   $$
   (0.23 - 1.1)\times10^{-2} = (-0.87)\times10^{-2}
   $$

3. Ajustamos el número base para que quede entre 1 y 9:  
   movemos el punto una posición a la derecha y reducimos el exponente en 1.

   $$
   (-0.87)\times10^{-2} = (-8.7)\times10^{-3}
   $$

4. Resultado final:

   $$
   \boxed{-8.7\times10^{-3}}
   $$

---

### 💡 **Resumen visual**

| **Caso** | **Qué se hace** | **Ejemplo simplificado** | **Resultado** |
|:----------|:----------------|:--------------------------|:--------------|
| Exponentes iguales | Se suman o restan directamente | $(5.2+1.3)\times10^4$ | $6.5\times10^4$ |
| Exponentes distintos | Se ajusta uno de los números | $(3.2\times10^5)+(4.8\times10^4)$ | $3.68\times10^5$ |
| Resultado menor que 1 | Se ajusta exponente y base | $(-0.87)\times10^{-2}$ | $-8.7\times10^{-3}$ |

---

> 📘 **En resumen:**  
> Para sumar o restar en notación científica, **igualar los exponentes es esencial**.  
> Luego, se realiza la operación con los números base y se ajusta el resultado  
> para que el número base quede entre **1 y 9**, manteniendo la coherencia con la notación científica.