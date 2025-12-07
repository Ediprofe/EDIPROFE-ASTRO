/**
 * Tipos centralizados para el contenido del sitio
 * Proporciona tipado fuerte para colecciones y lecciones
 */
import type { CollectionEntry } from 'astro:content';

// Slugs de materias disponibles
export const MATERIA_SLUGS = ['matematicas', 'fisica', 'quimica', 'ciencias'] as const;
export type MateriaSlug = typeof MATERIA_SLUGS[number];

// Tipo unión para cualquier entrada de colección de materia
export type Lesson = 
  | CollectionEntry<'matematicas'>
  | CollectionEntry<'fisica'>
  | CollectionEntry<'quimica'>
  | CollectionEntry<'ciencias'>;

// Interfaz para el frontmatter de una lección
export interface LessonFrontmatter {
  title?: string;
  description?: string;
  order?: number;
  draft?: boolean;
}

// Interfaz para una lección procesada (con datos adicionales)
export interface ProcessedLesson {
  slug: string;
  title: string;
  description?: string;
  materia: MateriaSlug;
  unidad: string;
  bloque: string;
  order: number;
}

// Type guard para verificar si un slug es una materia válida
export function isMateriaSlug(slug: string): slug is MateriaSlug {
  return MATERIA_SLUGS.includes(slug as MateriaSlug);
}

// Type guard para verificar si un objeto es una lección
export function isLesson(item: unknown): item is Lesson {
  return (
    typeof item === 'object' &&
    item !== null &&
    'slug' in item &&
    'data' in item &&
    'collection' in item
  );
}
