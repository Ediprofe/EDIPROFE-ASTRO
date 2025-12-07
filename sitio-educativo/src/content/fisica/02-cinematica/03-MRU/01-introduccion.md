# 🚗 **MRU: Introducción**

El **Movimiento Rectilíneo Uniforme (MRU)** es el modelo de movimiento más fundamental en la física. Se caracteriza por cumplir estrictamente dos condiciones:

1.  **Trayectoria Rectilínea:** El objeto se desplaza en línea recta, sin cambiar su dirección.
2.  **Velocidad Constante:** El objeto mantiene siempre la misma rapidez y dirección. Esto implica que la aceleración es nula ($a=0$).

> 💡 **Principio Fundamental:**
> En el MRU, el objeto recorre **distancias iguales en tiempos iguales**.
> Una velocidad de $10\,\mathrm{m/s}$ significa físicamente que **por cada segundo que transcurre, el cuerpo avanza exactamente 10 metros**.

---

## ⚙️ **Ejercicio 1 — Análisis por definición**

Un robot de juguete se mueve en línea recta con una velocidad constante de $4\,\mathrm{m/s}$. Si parte desde la posición cero, determinar su posición final después de $3\,\mathrm{s}$.

### **✅ Solución**

Para resolver este ejercicio, analizamos el significado físico de la velocidad dada:
El dato $v = 4\,\mathrm{m/s}$ indica que el robot avanza **4 metros cada segundo**.

Podemos desglosar el movimiento segundo a segundo:

* **Inicio ($t=0\,\mathrm{s}$):** Posición $0\,\mathrm{m}$.
* **Transcurre 1 segundo ($t=1\,\mathrm{s}$):** Avanza $4\,\mathrm{m}$. Posición: $4\,\mathrm{m}$.
* **Transcurre otro segundo ($t=2\,\mathrm{s}$):** Avanza otros $4\,\mathrm{m}$. Posición: $4 + 4 = 8\,\mathrm{m}$.
* **Transcurre otro segundo ($t=3\,\mathrm{s}$):** Avanza otros $4\,\mathrm{m}$. Posición: $8 + 4 = 12\,\mathrm{m}$.

**Cálculo directo:**
Dado que la velocidad es constante, multiplicamos el avance por segundo por el total de segundos:

$$
d = 4\,\mathrm{m/s} \times 3\,\mathrm{s} = 12\,\mathrm{m}
$$

**Respuesta:**
Al cabo de $3\,\mathrm{s}$, el robot habrá recorrido $12\,\mathrm{m}$.

---

## ⚙️ **Ejercicio 2 — Deducción de parámetros**

Un corredor de larga distancia entrena manteniendo un ritmo constante. Se observa que recorre $20\,\mathrm{m}$ cada $4\,\mathrm{s}$.

1.  ¿Cuál es su velocidad constante?
2.  Si mantiene ese mismo ritmo, ¿qué distancia recorrerá en $10\,\mathrm{s}$?

### **✅ Solución**

**1. Cálculo de la velocidad:**
Sabemos que recorre $20\,\mathrm{m}$ en $4\,\mathrm{s}$. Como el movimiento es **uniforme**, significa que en cada uno de esos 4 segundos recorrió la misma fracción de distancia.
Dividimos la distancia total entre el tiempo total para encontrar el avance por segundo:

$$
v = \frac{20\,\mathrm{m}}{4\,\mathrm{s}} = 5\,\mathrm{m/s}
$$

Esto significa que el corredor avanza **5 metros por cada segundo**.

**2. Cálculo de la distancia futura:**
Conociendo su ritmo ($5\,\mathrm{m/s}$), podemos determinar cuánto avanzará en $10\,\mathrm{s}$. Simplemente multiplicamos su avance por segundo por el nuevo tiempo:

$$
d = 5\,\mathrm{m/s} \times 10\,\mathrm{s} = 50\,\mathrm{m}
$$

**Respuesta:**
Su velocidad es $5\,\mathrm{m/s}$ y en 10 segundos recorrerá una distancia total de $50\,\mathrm{m}$.