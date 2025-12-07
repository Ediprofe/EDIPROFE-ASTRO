# 🚀 **Movimiento Rectilíneo Uniformemente Acelerado (MRUA)**

Hasta ahora habíamos estudiado movimientos donde la velocidad nunca cambiaba (MRU). Pero en la vida real, lo más común es que los objetos arranquen, frenen o aumenten su rapidez.

El **MRUA** es aquel movimiento en línea recta donde la **velocidad cambia** de manera uniforme.

La clave para entender este movimiento es una nueva magnitud física: la **Aceleración ($a$)**.

---

## ⚡ **El Concepto de Aceleración**

La **Aceleración** nos dice **qué tan rápido cambia la velocidad** de un objeto.

* Si la velocidad se mantiene igual, la aceleración es **cero** ($a=0$).
* Si la velocidad aumenta o disminuye, existe una **aceleración** ($a \neq 0$).

### **¿Qué significa la unidad m/s²?**

La unidad de medida es **metros por segundo al cuadrado**. Aunque suena complejo, su significado es muy lógico si lo leemos así: **"Metros por segundo, cada segundo"**.

$$
a = \frac{\Delta v}{t} = \frac{\mathrm{m/s}}{\mathrm{s}} = \mathrm{m/s^2}
$$

> **La Regla de Oro:**
> Si un objeto tiene una aceleración de **$2\,\mathrm{m/s^2}$**, significa que su velocidad **aumenta en $2\,\mathrm{m/s}$ por cada segundo que pasa.**

---

## ✨ **Características del MRUA**

1.  **Trayectoria Rectilínea:** El objeto se mueve siempre en línea recta.
2.  **Velocidad Variable:** La velocidad no es fija; cambia instante a instante.
3.  **Aceleración Constante:** El ritmo al que cambia la velocidad es siempre el mismo (no cambia de golpe).

---

## ⚙️ **Ejercicio 1 — El Arranque de una Moto**

Una motocicleta está detenida frente a un semáforo en rojo. Cuando cambia a verde, el conductor acelera en línea recta con una aceleración constante de $5\,\mathrm{m/s^2}$ durante 4 segundos.

### **✅ Análisis Didáctico**

**1. Interpretación del dato:**
Tenemos que $a = 5\,\mathrm{m/s^2}$.
Esto significa: **"Cada segundo que pase, la moto sumará $5\,\mathrm{m/s}$ a su velocidad anterior"**.

**2. Condiciones Iniciales:**
* Tiempo inicial: $t = 0\,\mathrm{s}$
* Velocidad inicial ($v_i$): $0\,\mathrm{m/s}$ (Estaba quieta).

**3. Evolución paso a paso:**

| Tiempo ($t$) | ¿Qué ocurre? (Concepto) | Operación | Velocidad Instantánea ($v$) |
| :---: | :--- | :--- | :---: |
| **0 s** | Inicio del movimiento | $0$ | **$0\,\mathrm{m/s}$** |
| **1 s** | Ganó sus primeros 5 de velocidad | $0 + 5$ | **$5\,\mathrm{m/s}$** |
| **2 s** | Ganó *otros* 5 de velocidad | $5 + 5$ | **$10\,\mathrm{m/s}$** |
| **3 s** | Ganó *otros* 5 de velocidad | $10 + 5$ | **$15\,\mathrm{m/s}$** |
| **4 s** | Ganó *otros* 5 de velocidad | $15 + 5$ | **$20\,\mathrm{m/s}$** |

**Conclusión:**
Al cabo de 4 segundos, la moto viaja a $20\,\mathrm{m/s}$. La aceleración actuó como una "tasa de recarga" constante de velocidad.

---

## ⚙️ **Ejercicio 2 — Caída Libre (La Gravedad)**

Un estudiante deja caer una piedra desde la azotea de un edificio alto. La **Caída Libre** es el ejemplo perfecto de MRUA en la naturaleza, donde la aceleración es provocada por la atracción de la Tierra.

A esta aceleración la llamamos **Gravedad ($g$)** y su valor aproximado es $9.8\,\mathrm{m/s^2}$.

### **✅ Análisis Didáctico**

**1. Interpretación del dato:**
Tenemos que $g = 9.8\,\mathrm{m/s^2}$.
Esto significa: **"La gravedad provoca que la piedra aumente su velocidad en $9.8\,\mathrm{m/s}$ por cada segundo que cae"**.

**2. Condiciones Iniciales:**
* Tiempo inicial: $t = 0\,\mathrm{s}$
* Velocidad inicial ($v_i$): $0\,\mathrm{m/s}$ (Se deja caer, no se lanza).

**3. Evolución paso a paso:**

| Tiempo ($t$) | ¿Qué ocurre? (Concepto) | Operación | Velocidad Instantánea ($v$) |
| :---: | :--- | :--- | :---: |
| **0 s** | Instante en que se suelta | $0$ | **$0\,\mathrm{m/s}$** |
| **1 s** | La gravedad aceleró la piedra | $0 + 9.8$ | **$9.8\,\mathrm{m/s}$** |
| **2 s** | Se suma otro "paquete" de velocidad | $9.8 + 9.8$ | **$19.6\,\mathrm{m/s}$** |
| **3 s** | Se suma otro "paquete" de velocidad | $19.6 + 9.8$ | **$29.4\,\mathrm{m/s}$** |

**Conclusión:**
Sin usar fórmulas complejas, sabemos que a los 3 segundos la piedra viaja a $29.4\,\mathrm{m/s}$. Esto demuestra que la caída libre es simplemente un MRUA donde la aceleración ya está definida por la naturaleza.