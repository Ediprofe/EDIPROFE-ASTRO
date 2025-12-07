---
title: Forma estándar y notación científica
---

## 🧮 **Conversión entre forma estándar y notación científica**

En esta sección aprenderás a **convertir un número común (forma estándar)** en **notación científica**,  
y también cómo **volver** de la notación científica a la **forma decimal original**.

---

### 🔹 **1. De forma estándar a notación científica**

Para convertir un número común en notación científica:

1. Coloca el punto decimal de modo que quede **una sola cifra distinta de cero antes del punto**.  
2. Cuenta **cuántos lugares se movió el punto**:  
   - Si se movió **a la izquierda**, el exponente de 10 es **positivo**.  
   - Si se movió **a la derecha**, el exponente de 10 es **negativo**.  
3. Escribe el número en la forma $a\times10^n$.

---

#### ✏️ **Ejemplo 1: número grande**

Convierte $4500000$ a notación científica.

**Solución paso a paso:**

1. Mueve el punto decimal después del primer dígito no nulo:  
   $4.5$
2. Contamos los lugares movidos: **6 lugares a la izquierda**.  
3. El exponente será positivo: $n = +6$.

$$
4500000 = 4.5\times10^6
$$

---

#### ✏️ **Ejemplo 2: número pequeño**

Convierte $0.00037$ a notación científica.

**Solución paso a paso:**

1. Mueve el punto decimal hasta después del primer dígito no nulo:  
   $3.7$
2. Se movió **4 lugares a la derecha**, por lo tanto el exponente será negativo: $n = -4$.

$$
0.00037 = 3.7\times10^{-4}
$$

---

### 🔹 **2. De notación científica a forma estándar**

Para convertir un número expresado como $a\times10^n$ a su forma decimal:

1. Si el exponente $n$ es **positivo**, mueve el punto decimal **a la derecha** $n$ lugares.  
2. Si el exponente $n$ es **negativo**, mueve el punto decimal **a la izquierda** $n$ lugares.  
3. Completa con ceros si es necesario.

---

#### ✏️ **Ejemplo 3: exponente positivo**

Convierte $3.25\times10^4$ a forma estándar.

**Solución paso a paso:**

1. El exponente $n=4$ indica que se mueve el punto **4 lugares a la derecha**.  
2. Desplazamos el punto:  
   $3.25 \rightarrow 32500$

$$
3.25\times10^4 = 32500
$$

---

#### ✏️ **Ejemplo 4: exponente negativo**

Convierte $6.5\times10^{-3}$ a forma estándar.

**Solución paso a paso:**

1. El exponente $n=-3$ indica que se mueve el punto **3 lugares a la izquierda**.  
2. Colocamos el punto:  
   $6.5 \rightarrow 0.0065$

$$
6.5\times10^{-3} = 0.0065
$$

---

### 💡 **Resumen**

| **Conversión** | **Movimiento del punto decimal** | **Ejemplo** |
|:----------------|:---------------------------------|:-------------|
| De número grande → notación científica | A la izquierda → exponente positivo | $4500000 = 4.5\times10^6$ |
| De número pequeño → notación científica | A la derecha → exponente negativo | $0.00037 = 3.7\times10^{-4}$ |
| De notación científica → forma estándar (n positivo) | A la derecha | $3.25\times10^4 = 32500$ |
| De notación científica → forma estándar (n negativo) | A la izquierda | $6.5\times10^{-3} = 0.0065$ |

---

> 📘 **En conclusión:**  
> La notación científica permite expresar cualquier número como el producto de un número base entre **1 y 9** multiplicado por una potencia de 10.  
> Saber convertir **en ambas direcciones** es esencial para comprender las operaciones y comparaciones con magnitudes muy grandes o muy pequeñas.
