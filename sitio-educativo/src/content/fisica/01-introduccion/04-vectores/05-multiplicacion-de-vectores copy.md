

# Multiplicación de vectores

La **multiplicación de vectores** puede entenderse como una forma de **cambiar el tamaño o el sentido de un vector**.
En este nivel estudiaremos principalmente **la multiplicación de un vector por un número (escalar)** y cómo afecta a sus componentes.

---

## 1. Multiplicación de un vector por un número (escalar)

Cuando un vector se multiplica por un **número real** (escalar), se obtiene **otro vector en la misma dirección**, pero con **magnitud diferente**.

Si $\vec{A}$ es un vector y $k$ es un escalar, entonces:

$$
\vec{B} = k\vec{A}
$$

### Casos:

* Si $k > 1$, el vector $\vec{B}$ es **más largo**.
* Si $0 < k < 1$, el vector es **más corto**.
* Si $k = -1$, el vector mantiene la magnitud pero **invierte el sentido**.

### Ejemplo:

Supón que $\vec{A}$ representa una velocidad de $4,\text{m/s}$ hacia el este:

* $2\vec{A} \rightarrow 8,\text{m/s}$ hacia el este
* $\tfrac12\vec{A} \rightarrow 2,\text{m/s}$ hacia el este
* $-\vec{A} \rightarrow 4,\text{m/s}$ hacia el oeste

$$
\vec{A} = 4,\text{m/s} \ (\text{este})
\quad\Rightarrow\quad
-\vec{A} = 4,\text{m/s} \ (\text{oeste})
$$

---

## 2. Multiplicación por componentes

Todo vector en el plano puede escribirse como:

$$
\vec{A} = A_x,\hat{i} + A_y,\hat{j}
$$

Si lo multiplicamos por un escalar $k$:

$$
k\vec{A} = (kA_x),\hat{i} + (kA_y),\hat{j}
$$

Es decir: **cada componente se multiplica por $k$**.

### Ejemplo:

$$
\vec{A} = 3,\hat{i} + 2,\hat{j}, \qquad k = 2
$$

Entonces:

$$
2\vec{A} = 6,\hat{i} + 4,\hat{j}
$$

---

## 3. Interpretación gráfica

Al representar $\vec{A}$ y $k\vec{A}$:

* Tienen la **misma dirección**.
* Si $k > 0$, apuntan al **mismo sentido**.
* Si $k < 0$, apuntan en **sentidos opuestos**.
* La **longitud** depende de $|k|$.

> **En resumen:**
>
> * Multiplicar un vector por un escalar cambia su **magnitud** y posiblemente su **sentido**.
> * Las **componentes** también se multiplican por ese escalar.

---

## 4. Aplicación práctica

En física vemos esta operación en muchas situaciones:

* $$\vec{F} = m\vec{a}$$
  (Aumentar la masa escala la fuerza.)
* $$\vec{v} = \vec{a}t$$
  (Mayor tiempo → mayor velocidad.)
* Escalado de vectores en gráficos o simulaciones.

$$
\vec{v} = \vec{a}t
\quad\Rightarrow\quad
t \uparrow \ \Rightarrow\ |\vec{v}| \uparrow
$$

---

## Conclusión

La multiplicación de un vector por un escalar permite **modificar su tamaño** y, si el escalar es negativo, **invertir su sentido**.
Más adelante podrás estudiar el **producto punto** y el **producto cruz**, pero esta operación es la base para comprenderlos.

---

