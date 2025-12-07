# Representación de vectores en el plano

Los vectores pueden representarse **gráficamente** en un **plano cartesiano**, lo que permite visualizar su magnitud, dirección y sentido de manera precisa.

Un vector en el plano se puede ubicar a partir de dos puntos:

* **Punto de origen (cola):** donde empieza el vector.
* **Punta o extremo (cabeza):** hacia donde apunta.

Por ejemplo, si un vector $\vec{A}$ parte del punto $O(0,0)$ y llega hasta el punto $P(4,3)$, puede representarse así:

$$
\vec{A} = \overrightarrow{OP}
$$

Esto significa que el vector va desde el origen hasta el punto $(4,3)$.

---

## 1. Representación gráfica

En el plano cartesiano, el vector $\vec{A}$ se dibuja como una **flecha** desde $(0,0)$ hasta $(4,3)$:

* La **longitud de la flecha** representa la **magnitud**.
* La **inclinación** con respecto al eje $x$ muestra la **dirección**.
* La **punta** indica el **sentido**.

La magnitud del vector se calcula con el **teorema de Pitágoras**:

$$
|\vec{A}| = \sqrt{A_x^2 + A_y^2}
$$

donde $A_x$ y $A_y$ son las **componentes** del vector en los ejes $x$ y $y$.

---

## 2. Componentes de un vector

Todo vector en el plano puede descomponerse en dos **componentes perpendiculares**:

$$
\vec{A} = A_x,\hat{i} + A_y,\hat{j}
$$

donde:

* $A_x$ es la **proyección del vector sobre el eje $x$**,
* $A_y$ es la **proyección del vector sobre el eje $y$**,
* $\hat{i}$ y $\hat{j}$ son los **vectores unitarios** en las direcciones de los ejes $x$ y $y$ respectivamente.

Si el vector forma un ángulo $\theta$ con el eje $x$, entonces:

$$
A_x = |\vec{A}|\cos{\theta}
$$

$$
A_y = |\vec{A}|\sin{\theta}
$$

---

## 3. Ejemplo

Un vector $\vec{B}$ tiene una magnitud de $10,\mathrm{m}$ y forma un ángulo de $37^\circ$ con el eje $x$.
Sus componentes son:

$$
B_x = 10\cos{37^\circ} = 8,\mathrm{m}
$$

$$
B_y = 10\sin{37^\circ} = 6,\mathrm{m}
$$

Por lo tanto:

$$
\vec{B} = 8,\hat{i} + 6,\hat{j}
$$

Este vector puede representarse gráficamente con una flecha que parte del origen $(0,0)$ y llega al punto $(8,6)$.

---

## 4. Observaciones importantes

* Un vector **puede trasladarse** paralelamente sin cambiar su valor (solo importa su magnitud, dirección y sentido).
* Los vectores se **suman o restan** gráficamente utilizando sus componentes o con métodos geométricos (esto se estudiará en la siguiente sección).
* El sistema cartesiano facilita comparar, sumar y proyectar vectores con precisión.

---

> 📘 **En resumen:**
> En el plano, un vector se describe mediante sus componentes $(A_x, A_y)$ o mediante su magnitud y ángulo $(|\vec{A}|, \theta)$.
> Ambas formas representan la misma información: *cuánto mide, hacia dónde apunta y en qué dirección actúa*.
