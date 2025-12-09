/**
 * Utilidades para manejo de colecciones de contenido
 * Centraliza la lógica de obtención de lecciones y navegación
 */

import { getCollection } from 'astro:content';
import { buildNavigationFromLessonsWithCollection, mergeNavigations } from './navigation-generator.js';
import { allMeta, isValidLesson } from './load-meta.js';
import { MATERIAS_SLUGS, type MateriaSlug } from '../config/materias';

export interface LessonWithMateria {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: any;
  materia: MateriaSlug;
}

export interface MateriaInfo {
  slug: MateriaSlug;
  name: string;
  lessonCount: number;
}

/**
 * Obtiene todas las lecciones de todas las materias
 * Solo incluye lecciones válidas (con H1 y cuyos capítulos/temas tienen name)
 */
export async function getAllLessons(): Promise<LessonWithMateria[]> {
  const allLessons: LessonWithMateria[] = [];

  for (const materia of MATERIAS_SLUGS) {
    try {
      const lessons = await getCollection(materia as any);
      lessons.forEach((lesson: any) => {
        // Solo incluir lecciones válidas
        if (isValidLesson(lesson, materia)) {
          allLessons.push({
            id: lesson.id,
            slug: lesson.slug,
            body: lesson.body,
            collection: lesson.collection,
            data: lesson.data,
            materia
          });
        }
      });
    } catch (e) {
      // Colección vacía o no existe
    }
  }

  return allLessons;
}

/**
 * Obtiene la navegación completa de todas las materias
 */
export async function getFullNavigation(): Promise<any> {
  let navigation: any = {};

  for (const materia of MATERIAS_SLUGS) {
    try {
      const lessons = await getCollection(materia as any);
      const nav = buildNavigationFromLessonsWithCollection(lessons, materia, allMeta);
      navigation = mergeNavigations(navigation, nav);
    } catch (e) {
      // Colección vacía o no existe
    }
  }

  return navigation;
}

/**
 * Obtiene información de materias con conteo de lecciones
 */
export async function getMateriasInfo(): Promise<MateriaInfo[]> {
  const navigation = await getFullNavigation();

  return Object.entries(navigation)
    .map(([key, value]: [string, any]) => ({
      slug: key as MateriaSlug,
      name: value.name,
      lessonCount: countLessonsInMateria(value)
    }))
    .filter(materia => materia.lessonCount > 0);
}

/**
 * Cuenta las lecciones en una materia
 */
function countLessonsInMateria(materia: any): number {
  return Object.values(materia.unidades).reduce((acc: number, unidad: any) => {
    return acc + Object.values(unidad.bloques).reduce((acc2: number, bloque: any) => {
      return acc2 + bloque.lecciones.length;
    }, 0);
  }, 0);
}

/**
 * Obtiene lecciones de una materia específica
 * Solo incluye lecciones válidas (con H1 y cuyos capítulos/temas tienen name)
 */
export async function getLessonsByMateria(materia: MateriaSlug): Promise<any[]> {
  try {
    const lessons = await getCollection(materia as any);
    return lessons.filter((lesson: any) => isValidLesson(lesson, materia));
  } catch (e) {
    return [];
  }
}
