/**
 * Tipos para la estructura de navegación
 * Define la jerarquía materia > unidad > bloque > lección
 */
import type { MateriaSlug } from './content';

// Estructura de una lección en la navegación
export interface NavLesson {
  slug: string;
  title: string;
  order: number;
}

// Estructura de un bloque en la navegación
export interface NavBloque {
  name: string;
  lecciones: NavLesson[];
}

// Estructura de una unidad en la navegación
export interface NavUnidad {
  name: string;
  bloques: Record<string, NavBloque>;
}

// Estructura de una materia en la navegación
export interface NavMateria {
  name: string;
  unidades: Record<string, NavUnidad>;
}

// Estructura completa de navegación
export type Navigation = Record<MateriaSlug, NavMateria>;

// Tipo para navegación parcial (puede no tener todas las materias)
export type PartialNavigation = Partial<Navigation>;

// Función helper para contar lecciones en una materia
export function countLessonsInMateria(materia: NavMateria): number {
  return Object.values(materia.unidades).reduce((acc, unidad) => {
    return acc + Object.values(unidad.bloques).reduce((acc2, bloque) => {
      return acc2 + bloque.lecciones.length;
    }, 0);
  }, 0);
}

// Función helper para contar lecciones en una unidad
export function countLessonsInUnidad(unidad: NavUnidad): number {
  return Object.values(unidad.bloques).reduce((acc, bloque) => {
    return acc + bloque.lecciones.length;
  }, 0);
}
