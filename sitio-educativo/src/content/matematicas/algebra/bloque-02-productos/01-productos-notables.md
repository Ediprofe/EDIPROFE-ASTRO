---
title: Productos Notables
description: Fórmulas y aplicaciones de los productos notables en álgebra
---

# Productos Notables

## ¿Qué son los productos notables?

Los **productos notables** son multiplicaciones de expresiones algebraicas que aparecen frecuentemente y tienen resultados que podemos memorizar. Conocerlos nos permite simplificar cálculos.

## Cuadrado de un binomio

### Cuadrado de una suma

$$
(a + b)^2 = a^2 + 2ab + b^2
$$

**Demostración:**
$$
(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2
$$

**Ejemplo:** $(x + 3)^2 = x^2 + 2(x)(3) + 3^2 = x^2 + 6x + 9$

### Cuadrado de una diferencia

$$
(a - b)^2 = a^2 - 2ab + b^2
$$

**Ejemplo:** $(2x - 5)^2 = (2x)^2 - 2(2x)(5) + 5^2 = 4x^2 - 20x + 25$

## Producto de suma por diferencia

$$
(a + b)(a - b) = a^2 - b^2
$$

Este resultado se conoce como **diferencia de cuadrados**.

**Demostración:**
$$
(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2
$$

**Ejemplo:** $(x + 7)(x - 7) = x^2 - 49$

## Cubo de un binomio

### Cubo de una suma

$$
(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3
$$

### Cubo de una diferencia

$$
(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3
$$

## Tabla resumen

| Producto Notable | Fórmula |
|-----------------|---------|
| Cuadrado de suma | $(a+b)^2 = a^2 + 2ab + b^2$ |
| Cuadrado de diferencia | $(a-b)^2 = a^2 - 2ab + b^2$ |
| Suma por diferencia | $(a+b)(a-b) = a^2 - b^2$ |
| Cubo de suma | $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ |
| Cubo de diferencia | $(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$ |

## Binomio de Newton

Para potencias mayores, usamos el **binomio de Newton**:

$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
$$

donde $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ es el coeficiente binomial.

### Triángulo de Pascal

Los coeficientes binomiales forman el triángulo de Pascal:

```
        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1
```

## Video explicativo

https://www.youtube.com/watch?v=Gn2pdkvdbGQ

## Aplicaciones

### En geometría

El área de un cuadrado con lado $(a + b)$:

$$
A = (a + b)^2 = a^2 + 2ab + b^2
$$

Esto representa la suma de:
- Un cuadrado de lado $a$
- Un cuadrado de lado $b$
- Dos rectángulos de lados $a$ y $b$

### En cálculo

Los productos notables son esenciales para:
- Factorizar expresiones
- Simplificar límites
- Resolver ecuaciones

## Ejercicios

1. Desarrolla: $(3x + 2)^2$

2. Desarrolla: $(5a - 3b)^2$

3. Simplifica: $(x + 4)(x - 4)$

4. Desarrolla: $(2x + 1)^3$

5. Factoriza: $x^2 - 16$

## Soluciones

1. $(3x + 2)^2 = 9x^2 + 12x + 4$

2. $(5a - 3b)^2 = 25a^2 - 30ab + 9b^2$

3. $(x + 4)(x - 4) = x^2 - 16$

4. $(2x + 1)^3 = 8x^3 + 12x^2 + 6x + 1$

5. $x^2 - 16 = (x + 4)(x - 4)$

## Resumen

- Los productos notables simplifican cálculos algebraicos
- El cuadrado de un binomio tiene tres términos
- La diferencia de cuadrados es $(a+b)(a-b) = a^2 - b^2$
- El triángulo de Pascal da los coeficientes para potencias mayores

---

*Siguiente lección: [Factorización →](/matematicas/algebra/bloque-02-productos/02-factorizacion)*
