# 📐 **Fórmulas del Movimiento Rectilíneo Uniforme (MRU)**

Para describir matemáticamente el movimiento de manera sencilla y progresiva, usaremos la letra **$x$** para representar el **Desplazamiento**.

### **1. El Caso Simple (Partiendo de Cero)**

Imaginemos la situación más común: encendemos el cronómetro justo cuando el objeto arranca desde el punto de inicio ($0$).

En este caso, el **desplazamiento ($x$)** es simplemente la multiplicación de la velocidad por el tiempo.

#### **A. Para calcular el Desplazamiento ($x$)**
$$
x = v \cdot t
$$

#### **B. Para calcular la Velocidad ($v$)**
$$
v = \frac{x}{t}
$$

#### **C. Para calcular el Tiempo ($t$)**
$$
t = \frac{x}{v}
$$

> **Nota:** Estas fórmulas asumen que el objeto parte desde el origen ($0$).

---

### **2. El Caso General (Con Posición Inicial)**

En la realidad, no siempre empezamos a contar desde cero. A veces el objeto ya se encuentra en una **Posición Inicial ($x_i$)** y termina en una **Posición Final ($x_f$)**.

Aquí debemos ser más precisos: el **Desplazamiento** ya no es solo $x$, sino la diferencia entre dónde terminas y dónde empezaste. A esto lo llamamos **Delta x ($\Delta x$)**.

$$
\Delta x = x_f - x_i
$$

Sustituyendo esto en nuestras fórmulas, la ecuación de la posición evoluciona así:

$$
x_f = x_i + v \cdot t
$$

**Donde:**
* $x_f$: **Posición Final** (Ubicación de llegada).
* $x_i$: **Posición Inicial** (Ubicación de partida).
* $v \cdot t$: **Desplazamiento** (Lo que recorrió).

**Para hallar el tiempo en este caso:**
Primero calculamos cuánto se desplazó realmente ($\Delta x$) y dividimos por la velocidad.

$$
t = \frac{x_f - x_i}{v}
$$

---

## ⚙️ **Ejercicio 1 — Caso Simple (Hallar Velocidad)**

Un atleta corre un desplazamiento de $100\,\mathrm{m}$ partiendo desde la línea de salida. Si tarda $10\,\mathrm{s}$ en llegar a la meta, ¿cuál fue su velocidad?

### **✅ Solución**

**1. Datos:**
* Desplazamiento ($x$): $100\,\mathrm{m}$
* Tiempo ($t$): $10\,\mathrm{s}$
* Incógnita: $v$

**2. Fórmula:**
Como parte de la salida, usamos la fórmula simple.
$$v = \frac{x}{t}$$

**3. Sustitución:**

$$
v = \frac{100\,\mathrm{m}}{10\,\mathrm{s}}
$$

$$
\boxed{v = 10\,\mathrm{m/s}}
$$

---

## ⚙️ **Ejercicio 2 — Caso Simple (Hallar Desplazamiento)**

El sonido viaja a una velocidad constante de $340\,\mathrm{m/s}$. Si un trueno se escucha $3\,\mathrm{s}$ después del relámpago, ¿cuál fue el desplazamiento ($x$) del sonido desde la nube hasta nosotros?

### **✅ Solución**

**1. Datos:**
* Velocidad ($v$): $340\,\mathrm{m/s}$
* Tiempo ($t$): $3\,\mathrm{s}$
* Incógnita: $x$

**2. Fórmula:**
$$x = v \cdot t$$

**3. Sustitución:**

$$
x = 340\,\mathrm{m/s} \cdot 3\,\mathrm{s}
$$

$$
\boxed{x = 1020\,\mathrm{m}}
$$

---

## ⚙️ **Ejercicio 3 — Caso General (Hallar Posición Final)**

Un ciclista se encuentra descansando justo en el letrero del **Kilómetro 10** ($x_i = 10\,\mathrm{km}$). Decide continuar su viaje a una velocidad de $20\,\mathrm{km/h}$. ¿En qué kilómetro estará después de **2 horas**?

### **✅ Solución**

**1. Datos:**
* Posición inicial ($x_i$): $10\,\mathrm{km}$ (Ya tiene un avance).
* Velocidad ($v$): $20\,\mathrm{km/h}$
* Tiempo ($t$): $2\,\mathrm{h}$
* Incógnita: $x_f$

**2. Fórmula:**
Usamos la fórmula general que incluye la posición inicial.
$$x_f = x_i + v \cdot t$$

**3. Sustitución:**

$$
x_f = 10\,\mathrm{km} + (20\,\mathrm{km/h} \cdot 2\,\mathrm{h})
$$

$$
x_f = 10\,\mathrm{km} + 40\,\mathrm{km}
$$

$$
\boxed{x_f = 50\,\mathrm{km}}
$$

**Respuesta:** El ciclista estará en el kilómetro 50.

---

## ⚙️ **Ejercicio 4 — Caso General (Hallar Tiempo)**

Un tren sale de la **Ciudad A** (ubicada en la posición $200\,\mathrm{km}$) y viaja hacia la **Ciudad B** (ubicada en la posición $500\,\mathrm{km}$). Si mantiene una velocidad constante de $100\,\mathrm{km/h}$, ¿cuánto tiempo tardará en llegar?

### **✅ Solución**

**1. Datos:**
* Posición inicial ($x_i$): $200\,\mathrm{km}$
* Posición final ($x_f$): $500\,\mathrm{km}$
* Velocidad ($v$): $100\,\mathrm{km/h}$
* Incógnita: $t$

**2. Análisis:**
Primero calculamos el desplazamiento real ($\Delta x$).
$$\Delta x = 500\,\mathrm{km} - 200\,\mathrm{km} = 300\,\mathrm{km}$$

**3. Fórmula y Sustitución:**
$$t = \frac{\Delta x}{v}$$

$$
t = \frac{300\,\mathrm{km}}{100\,\mathrm{km/h}}
$$

$$
\boxed{t = 3\,\mathrm{h}}
$$

**Respuesta:** El tren tardará 3 horas.