#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import readline from 'readline';

const colors = {
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,
  blue: (text) => `\x1b[34m${text}\x1b[0m`,
  cyan: (text) => `\x1b[36m${text}\x1b[0m`,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));

async function createLesson() {
  console.log(colors.blue('🎓 Creador de Lecciones\n'));
  
  const materia = await question(colors.cyan('Materia (ej: matematicas): '));
  const unidad = await question(colors.cyan('Unidad (ej: algebra): '));
  const bloque = await question(colors.cyan('Bloque (ej: bloque-01-fundamentos): '));
  const numero = await question(colors.cyan('Número de lección (01, 02, etc): '));
  const titulo = await question(colors.cyan('Título de la lección: '));
  
  const filename = `${numero}-${titulo.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.md`;
  const dirPath = path.join('src', 'content', materia, unidad, bloque);
  const filepath = path.join(dirPath, filename);
  
  const template = `---
title: ${titulo}
---

# ${titulo}

## Introducción

[Escribe aquí la introducción al tema]

## Conceptos fundamentales

### Concepto 1

Explicación del primer concepto. Puedes usar fórmulas inline como $f(x) = x^2$ 
o en bloque:

$$
\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
$$

### Concepto 2

Video explicativo:
https://www.youtube.com/watch?v=XXXXXXXXXX

## Ejemplos prácticos

### Ejemplo 1

Descripción del ejemplo:

$$
(a + b)^2 = a^2 + 2ab + b^2
$$

### Ejemplo 2

Tabla de valores:

| Variable | Valor | Fórmula |
|----------|-------|---------|
| x | 2 | $x^2$ |
| y | 4 | $2x$ |
| z | 8 | $x^3$ |

## Ejercicios propuestos

1. **Ejercicio 1:** Descripción del ejercicio
   - Pista: considera que...
   
2. **Ejercicio 2:** Otro ejercicio
   - Solución parcial: $x = ...$

## Recursos adicionales

- Video complementario: https://youtu.be/XXXXXXXXX
- [Enlace a recurso externo](https://example.com)

## Resumen

Los puntos clave de esta lección son:

- Punto importante 1
- Punto importante 2
- Punto importante 3

---

*Siguiente lección: [Título siguiente lección →]*
`;
  
  // Crear directorio si no existe
  await fs.mkdir(dirPath, { recursive: true });
  
  // Verificar si el archivo ya existe
  try {
    await fs.access(filepath);
    console.log(colors.red(`\n❌ El archivo ya existe: ${filepath}`));
    const overwrite = await question(colors.yellow('¿Deseas sobrescribirlo? (s/n): '));
    
    if (overwrite.toLowerCase() !== 's') {
      console.log(colors.blue('Operación cancelada'));
      rl.close();
      return;
    }
  } catch {
    // El archivo no existe, continuar
  }
  
  // Escribir archivo
  await fs.writeFile(filepath, template);
  
  console.log(colors.green(`\n✅ Lección creada exitosamente:`));
  console.log(colors.green(`   ${filepath}`));
  console.log(colors.blue(`\n💡 Tip: Ejecuta 'npm run dev' para ver tu nueva lección`));
  
  rl.close();
}

createLesson().catch(err => {
  console.error(colors.red('Error:', err.message));
  rl.close();
  process.exit(1);
});
