# Suma y resta de vectores

En física, muchas veces se necesita combinar varias magnitudes vectoriales.
Para hacerlo, utilizamos la **suma** y la **resta de vectores**, que pueden representarse **gráfica** o **analíticamente**.

---

## 1. Suma de vectores

La **suma de vectores** consiste en obtener un **vector resultante** que tiene el mismo efecto que todos los vectores originales actuando juntos.

### a) Método gráfico: regla del triángulo

Si se quieren sumar dos vectores $\vec{A}$ y $\vec{B}$:

1. Dibuja el vector $\vec{A}$.
2. Coloca la **cola de $\vec{B}$ en la punta de $\vec{A}$**.
3. El vector resultante $\vec{R}$ se traza desde la **cola de $\vec{A}$** hasta la **punta de $\vec{B}$**.

$$
\vec{R} = \vec{A} + \vec{B}
$$

> 💡 Este método también puede extenderse para tres o más vectores, colocando cada uno a continuación del anterior.

### b) Método gráfico: regla del paralelogramo

Si los vectores $\vec{A}$ y $\vec{B}$ parten del mismo punto, se completa un **paralelogramo** con ellos como lados adyacentes.
La **diagonal del paralelogramo** representa el vector resultante $\vec{R}$.

### c) Método analítico (por componentes)

Cuando los vectores están en el plano cartesiano, se suman sus **componentes** en cada eje:

$$
\vec{R} = \vec{A} + \vec{B}
$$

Si

[
\vec{A} = A_x,\hat{i} + A_y,\hat{j}
]

y

[
\vec{B} = B_x,\hat{i} + B_y,\hat{j},
]

entonces:

[
\vec{R} = (A_x + B_x),\hat{i} + (A_y + B_y),\hat{j}
]

La **magnitud** del vector resultante es:

$$
|\vec{R}| = \sqrt{R_x^2 + R_y^2}
$$

y la **dirección** con respecto al eje $x$ se obtiene con:

$$
\theta = \tan^{-1}!\left(\frac{R_y}{R_x}\right)
$$

---

## 2. Resta de vectores

La **resta de vectores** consiste en encontrar la diferencia entre dos vectores, es decir:

$$
\vec{R} = \vec{A} - \vec{B}
$$

Restar un vector equivale a **sumar su opuesto**, que tiene la **misma magnitud** pero **sentido contrario**:

$$
\vec{A} - \vec{B} = \vec{A} + (-\vec{B})
$$

### Ejemplo gráfico

1. Dibuja $\vec{A}$.
2. Invierte el sentido de $\vec{B}$ para obtener $-\vec{B}$.
3. Suma $\vec{A}$ y $-\vec{B}$ con la regla del triángulo.

---

## 3. Ejemplo analítico

Sean los vectores:

$$
\vec{A} = 6,\hat{i} + 3,\hat{j}
$$

$$
\vec{B} = 2,\hat{i} + 5,\hat{j}
$$

Entonces:

$$
\vec{R} = \vec{A} + \vec{B} = (6 + 2),\hat{i} + (3 + 5),\hat{j}
$$

$$
\vec{R} = 8,\hat{i} + 8,\hat{j}
$$

La **magnitud** del vector resultante es:

$$
|\vec{R}| = \sqrt{8^2 + 8^2} = 11.3,\mathrm{u}
$$

y la **dirección**:

$$
\theta = \tan^{-1}!\left(\frac{8}{8}\right) = 45^\circ
$$

Por lo tanto, el vector resultante tiene una **magnitud de $11.3,\mathrm{u}$** y una **dirección de $45^\circ$** respecto al eje $x$.

---

> 📘 **En resumen:**
>
> * Los vectores se **suman y restan** respetando su dirección y sentido.
> * En el plano cartesiano, se combinan **por componentes**.
> * El vector resultante indica el **efecto combinado** de todas las magnitudes vectoriales.
