# 📐 **Fórmulas del MRUA: De dónde salen y cómo usarlas**

En física, las fórmulas no son "magia"; son consecuencias lógicas de las definiciones básicas. A continuación, vamos a deducir las tres ecuaciones fundamentales del **Movimiento Rectilíneo Uniformemente Acelerado (MRUA)** paso a paso.

---

## 1️⃣ **Primera Ecuación: Calculando la Velocidad Final**

Esta fórmula nace directamente de la definición de **Aceleración**. Sabemos que la aceleración es el cambio de velocidad en el tiempo.

**Paso 1: Escribimos la definición**

$$
a = \frac{\text{Cambio de velocidad}}{\text{Tiempo}} = \frac{v_f - v_i}{t}
$$

**Paso 2: Despejamos la Velocidad Final ($v_f$)**

Pasamos el tiempo ($t$) a multiplicar al otro lado:

$$
a \cdot t = v_f - v_i
$$

Ahora pasamos la velocidad inicial ($v_i$) a sumar:

$$
v_i + a \cdot t = v_f
$$

**✅ FÓRMULA DE VELOCIDAD:**

$$
v_f = v_i + a \cdot t
$$

> **Uso:** Ideal cuando conoces el tiempo y la aceleración, y quieres saber qué tan rápido vas al final.

---

## 2️⃣ **Segunda Ecuación: Calculando la Posición**

Esta fórmula permite hallar dónde está el objeto en cualquier instante. Nace del concepto de **Velocidad Promedio**.

**Paso 1: Definimos el Desplazamiento usando el promedio**

Si la aceleración es constante, la velocidad promedio es justo la mitad entre la inicial y la final. El desplazamiento es esa velocidad promedio por el tiempo.

$$
\Delta x = \left( \frac{v_i + v_f}{2} \right) \cdot t
$$

**Paso 2: Sustitución**

En lugar de escribir $v_f$, insertamos la **Primera Ecuación** que acabamos de hallar ($v_i + a \cdot t$):

$$
\Delta x = \left( \frac{v_i + (v_i + a \cdot t)}{2} \right) \cdot t
$$

**Paso 3: Simplificación Algebraica**

Sumamos las velocidades iniciales ($2v_i$) y distribuimos el divisor 2:

$$
\Delta x = \left( v_i + \frac{1}{2}a \cdot t \right) \cdot t
$$

Multiplicamos todo por el tiempo ($t$) de afuera:

$$
\Delta x = v_i \cdot t + \frac{1}{2}a \cdot t^2
$$

**Paso 4: Posición Final**

Como $\Delta x = x_f - x_i$, despejamos $x_f$:

**✅ FÓRMULA DE POSICIÓN:**

$$
x_f = x_i + v_i \cdot t + \frac{1}{2}a \cdot t^2
$$

> **Uso:** La ecuación reina. Te dice dónde estás ($x_f$) en cualquier instante $t$.

---

## 3️⃣ **Tercera Ecuación: Eliminando el Tiempo**

A veces tenemos problemas donde conocemos las velocidades y distancias, pero **no sabemos el tiempo**. Para estos casos, fusionamos las ecuaciones anteriores para eliminar la variable $t$.

### **Paso 1: Recordamos las dos bases**

1.  **Desplazamiento por promedio:** $\Delta x = \left( \frac{v_f + v_i}{2} \right) \cdot t$
2.  **Definición de Aceleración:** $a = \frac{v_f - v_i}{t}$

### **Paso 2: Despejamos el Tiempo ($t$)**

De la ecuación de aceleración, despejamos $t$:

$$
t = \frac{v_f - v_i}{a}
$$

### **Paso 3: Sustitución**

Reemplazamos esta $t$ en la ecuación de desplazamiento:

$$
\Delta x = \left( \frac{v_f + v_i}{2} \right) \cdot \left( \frac{v_f - v_i}{a} \right)
$$

### **Paso 4: Diferencia de Cuadrados**

Multiplicamos las fracciones. En el numerador tenemos $(v_f + v_i)(v_f - v_i)$, lo cual es un producto notable (diferencia de cuadrados):

$$
\Delta x = \frac{v_f^2 - v_i^2}{2a}
$$

### **Paso 5: Despeje Final**

Pasamos $2a$ a multiplicar con el desplazamiento y despejamos $v_f^2$:

$$
2 \cdot a \cdot \Delta x = v_f^2 - v_i^2
$$

**✅ FÓRMULA SIN TIEMPO:**

$$
v_f^2 = v_i^2 + 2 \cdot a \cdot \Delta x
$$

> **Uso:** Fundamental cuando el problema **no menciona el tiempo**.

---

## 📝 **Resumen: Caja de Herramientas MRUA**

Usa esta tabla para saber qué fórmula elegir según los datos que tengas:

| **¿Qué quieres hallar?** | **¿Qué datos tienes?** | **Fórmula a usar** |
| :--- | :--- | :--- |
| **Velocidad Final ($v_f$)** | Tiempo y Aceleración | $$v_f = v_i + a \cdot t$$ |
| **Posición Final ($x_f$)** | Tiempo y Aceleración | $$x_f = x_i + v_i \cdot t + \frac{1}{2}a \cdot t^2$$ |
| **Velocidad o Posición** | **NO** tienes el tiempo | $$v_f^2 = v_i^2 + 2 \cdot a \cdot \Delta x$$ |