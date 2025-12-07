
# Multiplicación de vectores

La **multiplicación de vectores** puede entenderse de forma sencilla como una **manera de cambiar el tamaño o el sentido de un vector**.
En el nivel escolar, estudiaremos principalmente **la multiplicación de un vector por un número (escalar)** y cómo esto se refleja en sus componentes.

---

## 1. Multiplicación de un vector por un número (escalar)

Cuando un vector se multiplica por un **número real** (llamado **escalar**), se obtiene **otro vector en la misma dirección**, pero con una **magnitud diferente**.

Si $\vec{A}$ es un vector y $k$ es un número (escalar), entonces:

$$
\vec{B} = k\vec{A}
$$

### Casos:

* Si $k > 1$, el nuevo vector $\vec{B}$ es **más largo** (su magnitud aumenta).
* Si $0 < k < 1$, el vector es **más corto**.
* Si $k = -1$, el vector mantiene la **misma magnitud**, pero **invierte su sentido**.

### Ejemplo:

Supón que $\vec{A}$ representa una velocidad de $4,\mathrm{m/s}$ hacia el este. Entonces:

* $2\vec{A}$ → (8,\mathrm{m/s}) hacia el este.
* (\tfrac{1}{2}\vec{A}) → (2,\mathrm{m/s}) hacia el este.
* (-\vec{A}) → (4,\mathrm{m/s}) hacia el oeste.

$$
\vec{A} = 4,\mathrm{m/s}\ \text{(este)}
\quad \Rightarrow \quad
-\vec{A} = 4,\mathrm{m/s}\ \text{(oeste)}
$$

---

## 2. Multiplicación por componentes

Todo vector en el plano puede escribirse mediante sus **componentes**:

$$
\vec{A} = A_x,\hat{i} + A_y,\hat{j}
$$

Si lo multiplicamos por un número (k):

$$
k\vec{A} = (kA_x),\hat{i} + (kA_y),\hat{j}
$$

Esto significa que **cada componente se multiplica por (k)**.

### Ejemplo:

Si
[
\vec{A} = 3,\hat{i} + 2,\hat{j}, \quad k = 2,
]

entonces:

$$
2\vec{A} = 6,\hat{i} + 4,\hat{j}
$$

---

## 3. Interpretación gráfica

Al representar $\vec{A}$ y $k\vec{A}$ en el plano:

* Ambos tienen la **misma dirección**.
* Si (k > 0), apuntan al **mismo lado**.
* Si (k < 0), apuntan en **sentidos opuestos**.
* La **longitud** depende del valor de (|k|).

> **En resumen:**
>
> * Multiplicar un vector por un número **solo cambia su magnitud y su sentido**.
> * Las **componentes también se multiplican** por ese número.

---

## 4. Aplicación práctica

En física, este tipo de multiplicación aparece en:

* (\vec{F} = m\vec{a}): aumentar la masa aumenta la fuerza.
* (\vec{v} = \vec{a}t): al aumentar el tiempo, aumenta la velocidad.
* Escalado de vectores en gráficos o simulaciones.

$$
\vec{v} = \vec{a}t
\quad \Rightarrow \quad
t \uparrow \ \Rightarrow\ |\vec{v}| \uparrow
$$

---

## Conclusión

La multiplicación de un vector por un escalar permite **modificar su tamaño** y, si el escalar es negativo, **invertir su sentido**.
Más adelante estudiarás otras operaciones como el **producto punto** y el **producto cruz**, pero esta es la base para comprenderlas.

---

