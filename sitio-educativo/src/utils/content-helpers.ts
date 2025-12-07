/**
 * Helpers tipados para trabajar con colecciones de contenido
 * Centraliza la lógica de obtención y filtrado de lecciones
 */
import { getCollection } from 'astro:content';
import type { Lesson, MateriaSlug } from '../types/content';
import { MATERIA_SLUGS, isMateriaSlug } from '../types/content';

/**
 * Obtiene todas las lecciones de una materia específica
 * @param materia - Slug de la materia
 * @returns Array de lecciones tipadas
 */
export async function getLessonsByMateria(materia: MateriaSlug): Promise<Lesson[]> {
  try {
    const lessons = await getCollection(materia);
    return lessons as Lesson[];
  } catch {
    return [];
  }
}

/**
 * Obtiene todas las lecciones de todas las materias
 * @returns Array de todas las lecciones
 */
export async function getAllLessons(): Promise<Lesson[]> {
  const allLessons: Lesson[] = [];
  
  for (const materia of MATERIA_SLUGS) {
    const lessons = await getLessonsByMateria(materia);
    allLessons.push(...lessons);
  }
  
  return allLessons;
}

/**
 * Filtra lecciones por prefijo de slug (capítulo/tema)
 * @param lessons - Array de lecciones
 * @param pathPrefix - Prefijo del path a filtrar
 */
export function filterLessonsByPath(lessons: Lesson[], pathPrefix: string): Lesson[] {
  return lessons.filter(l => l.slug.startsWith(pathPrefix));
}

/**
 * Obtiene los capítulos únicos de un array de lecciones
 * @param lessons - Array de lecciones
 * @returns Array de slugs de capítulos únicos ordenados
 */
export function getUniqueCapitulos(lessons: Lesson[]): string[] {
  const capitulos = new Set(lessons.map(l => l.slug.split('/')[0]));
  return [...capitulos].sort();
}

/**
 * Obtiene los temas únicos de un capítulo
 * @param lessons - Array de lecciones
 * @param capitulo - Slug del capítulo
 * @returns Array de slugs de temas únicos ordenados
 */
export function getUniqueTemas(lessons: Lesson[], capitulo: string): string[] {
  const temas = new Set(
    lessons
      .filter(l => l.slug.startsWith(`${capitulo}/`))
      .map(l => l.slug.split('/')[1])
      .filter(Boolean)
  );
  return [...temas].sort();
}

/**
 * Agrupa lecciones por capítulo y tema
 * @param lessons - Array de lecciones
 * @returns Objeto agrupado por capítulo > tema > lecciones
 */
export function groupLessonsByCapituloAndTema(
  lessons: Lesson[]
): Record<string, Record<string, Lesson[]>> {
  const grouped: Record<string, Record<string, Lesson[]>> = {};
  
  for (const lesson of lessons) {
    const parts = lesson.slug.split('/');
    const capitulo = parts[0] || 'general';
    const tema = parts[1] || 'general';
    
    if (!grouped[capitulo]) grouped[capitulo] = {};
    if (!grouped[capitulo][tema]) grouped[capitulo][tema] = [];
    
    grouped[capitulo][tema].push(lesson);
  }
  
  return grouped;
}

/**
 * Obtiene el título de una lección de forma segura
 * @param lesson - Lección
 * @returns Título de la lección
 */
export function getLessonTitle(lesson: Lesson): string {
  return lesson.data.title || lesson.slug.split('/').pop() || 'Sin título';
}

/**
 * Valida y convierte un string a MateriaSlug
 * @param slug - String a validar
 * @returns MateriaSlug o undefined si no es válido
 */
export function toMateriaSlug(slug: string): MateriaSlug | undefined {
  return isMateriaSlug(slug) ? slug : undefined;
}
