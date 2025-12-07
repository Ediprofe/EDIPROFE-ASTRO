---
title: Multiplicación y división en notación científica
---

## ✖️➗ **Multiplicación y división en notación científica**

La notación científica facilita las operaciones con números muy grandes o muy pequeños,  
ya que permite **trabajar por separado** con los números base y con las potencias de 10.

---

### ⚙️ **Regla general de multiplicación**

Para multiplicar dos números en notación científica:

1. Multiplica los **números base**.  
2. **Suma los exponentes** de 10.  
3. Ajusta el número base si es necesario para que quede entre 1 y 9.

$$
(a\times10^n)\times(b\times10^m) = (a\cdot b)\times10^{n+m}
$$

---

#### ✏️ **Ejemplo 1: Multiplicación**

Multiplica los siguientes números:

$$
(2.5\times10^{3})\times(4.0\times10^{2})
$$

**Solución paso a paso:**

1. Multiplicamos los números base:  
   $2.5\times4.0=10.0$

2. Sumamos los exponentes:  
   $3+2=5$

3. El número base $10.0$ no está entre 1 y 9,  
   así que movemos el punto una posición a la izquierda y aumentamos el exponente en 1:

   $$
   10.0\times10^{5} = 1.0\times10^{6}
   $$

**Resultado final:**

$$
\boxed{1.0\times10^{6}}
$$

---

### ⚙️ **Regla general de división**

Para dividir dos números en notación científica:

1. Divide los **números base**.  
2. **Resta los exponentes** del numerador y denominador.  
3. Ajusta el número base para que quede entre 1 y 9.

$$
\dfrac{a\times10^{n}}{b\times10^{m}} = \left(\dfrac{a}{b}\right)\times10^{\,n-m}
$$

---

#### ✏️ **Ejemplo 2: División**

Divide los siguientes números:

$$
\dfrac{6.0\times10^{8}}{3.0\times10^{4}}
$$

**Solución paso a paso:**

1. Dividimos los números base:  
   $6.0\div3.0=2.0$

2. Restamos los exponentes:  
   $8-4=4$

3. El número base $2.0$ ya está entre 1 y 9, por lo tanto el resultado es:

$$
\boxed{2.0\times10^{4}}
$$

---

### 💡 **Resumen visual**

| **Operación** | **Regla** | **Ejemplo** | **Resultado** |
|:---------------|:-----------|:-------------|:--------------|
| Multiplicación | $(a\times10^n)(b\times10^m)=(a\cdot b)\times10^{n+m}$ | $(2.5\times10^3)(4.0\times10^2)$ | $1.0\times10^6$ |
| División | $\dfrac{a\times10^n}{b\times10^m}=\left(\dfrac{a}{b}\right)\times10^{n-m}$ | $\dfrac{6.0\times10^8}{3.0\times10^4}$ | $2.0\times10^4$ |

---

> 📘 **En resumen:**  
> En la **multiplicación**, se **suman los exponentes** de 10.  
> En la **división**, se **restan los exponentes**.  
> En ambos casos, asegúrate de que el número base esté entre **1 y 9** antes de escribir el resultado final.
