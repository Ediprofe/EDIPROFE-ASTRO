# ⛓️ **Factores de conversión compuestos**

Los **factores de conversión compuestos** (o conversión en cadena) se utilizan cuando **no existe una equivalencia directa** entre la unidad inicial y la unidad deseada, o cuando se prefiere utilizar pasos intermedios más conocidos.

El proceso consiste en conectar **dos o más factores de conversión** de forma consecutiva. La unidad de salida del primer factor se convierte en la unidad de entrada del siguiente, creando una "cadena" donde las unidades intermedias se cancelan, dejando únicamente la unidad final buscada.


El esquema general es:
$$
\text{Dato} \times \text{Factor A} \times \text{Factor B} = \text{Resultado}
$$

---

## 🧮 **Ejercicio 1 — Tiempo (Horas a Segundos)**

Convertir $5\,\mathrm{h}$ a $\mathrm{s}$.

No usamos un factor directo, sino que pasamos por los minutos:

1.  **Horas** $\rightarrow$ **Minutos** ($1\,\mathrm{h} = 60\,\mathrm{min}$)
2.  **Minutos** $\rightarrow$ **Segundos** ($1\,\mathrm{min} = 60\,\mathrm{s}$)

**Paso a paso:**

1️⃣ **Dato:** $5\,\mathrm{h}$  
2️⃣ **Planteamiento de la cadena:**

$$
5\,\mathrm{h} \times \underbrace{\dfrac{60\,\mathrm{min}}{1\,\mathrm{h}}}_{\text{Factor 1}} \times \underbrace{\dfrac{60\,\mathrm{s}}{1\,\mathrm{min}}}_{\text{Factor 2}}
$$

3️⃣ **Cálculo y cancelación:**
Las horas ($\mathrm{h}$) se cancelan con el primer denominador, y los minutos ($\mathrm{min}$) con el segundo.

$$
5 \times 60 \times 60 = 18000\,\mathrm{s}
$$

$$
\boxed{1.8 \times 10^4\,\mathrm{s}}
$$

---

## 🧮 **Ejercicio 2 — Volumen (Mililitros a Metros Cúbicos)**

Convertir $40\,\mathrm{mL}$ a $\mathrm{m}^3$.

Usamos el Litro como puente:

1.  **Mililitros** $\rightarrow$ **Litros** ($1\,\mathrm{L} = 1000\,\mathrm{mL}$)
2.  **Litros** $\rightarrow$ **Metros Cúbicos** ($1\,\mathrm{m}^3 = 1000\,\mathrm{L}$)

**Paso a paso:**

1️⃣ **Dato:** $40\,\mathrm{mL}$  
2️⃣ **Planteamiento de la cadena:**

$$
40\,\mathrm{mL} \times \underbrace{\dfrac{1\,\mathrm{L}}{1000\,\mathrm{mL}}}_{\text{Factor 1}} \times \underbrace{\dfrac{1\,\mathrm{m}^3}{1000\,\mathrm{L}}}_{\text{Factor 2}}
$$

3️⃣ **Cálculo y cancelación:**
Cancelamos $\mathrm{mL}$ y $\mathrm{L}$, quedando solo $\mathrm{m}^3$.

$$
40 \div 1000 \div 1000 = 0.00004\,\mathrm{m}^3
$$

$$
\boxed{4 \times 10^{-5}\,\mathrm{m}^3}
$$

---

> 💡 **Conclusión:** > En conversiones compuestas, tratamos las unidades como eslabones. No importa cuántos pasos intermedios existan, siempre que **la unidad del numerador de un factor cancele a la del denominador del siguiente** (o viceversa), el resultado será dimensionalmente correcto.