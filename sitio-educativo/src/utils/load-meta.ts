/**
 * Carga y gestión de metadatos (_meta.json)
 * Proporciona acceso tipado a los metadatos de navegación
 */
import type { AllMeta, MetaEntry } from '../types/meta';

// Cargar todos los archivos _meta.json usando import.meta.glob
const metaFiles = import.meta.glob<MetaEntry>('/src/content/**/_meta.json', { 
  eager: true,
  import: 'default'
});

/**
 * Limpia prefijos numéricos de cada segmento de una ruta y normaliza a minúsculas
 * Ej: "fisica/02-cinematica/03-MRU" -> "fisica/cinematica/mru"
 * Esto es necesario porque Astro convierte los slugs a minúsculas
 */
function cleanPath(path: string): string {
  return path
    .split('/')
    .map(segment => segment.replace(/^\d+-/, '').toLowerCase())
    .join('/');
}

/**
 * Carga todos los metadatos de _meta.json y los organiza por ruta
 * Las claves se normalizan sin prefijos numéricos para coincidir con URLs limpias
 * @returns Objeto con todos los metadatos indexados por ruta
 */
export function loadAllMeta(): AllMeta {
  const metaData: AllMeta = {};
  
  Object.entries(metaFiles).forEach(([path, module]) => {
    // path ejemplo: /src/content/fisica/02-cinematica/_meta.json
    // Extraer: fisica/02-cinematica -> fisica/cinematica
    const match = path.match(/\/src\/content\/(.+)\/_meta\.json$/);
    if (match && module) {
      const rawKey = match[1]; // "fisica/02-cinematica"
      const cleanKey = cleanPath(rawKey); // "fisica/cinematica"
      metaData[cleanKey] = module;
    }
  });
  
  return metaData;
}

// Instancia singleton de todos los metadatos
export const allMeta: AllMeta = loadAllMeta();

/**
 * Obtiene el nombre de un metadato de forma segura
 * @param key - Clave del metadato (ej: "fisica/cinematica")
 * @param fallback - Valor por defecto si no existe
 */
export function getMetaName(key: string, fallback: string): string {
  return allMeta[key]?.name ?? fallback;
}

/**
 * Obtiene la descripción de un metadato
 * @param key - Clave del metadato
 */
export function getMetaDescription(key: string): string | undefined {
  return allMeta[key]?.description;
}

/**
 * Verifica si existe un metadato para una ruta
 * @param key - Clave del metadato
 */
export function hasMetaEntry(key: string): boolean {
  return key in allMeta;
}

/**
 * Verifica si un metadato tiene el campo 'name' definido (no vacío)
 * @param key - Clave del metadato (ej: "fisica/cinematica")
 */
export function hasValidMetaName(key: string): boolean {
  const entry = allMeta[key];
  return entry?.name !== undefined && entry.name.trim() !== '';
}

// ============================================
// FUNCIONES DE VALIDACIÓN CENTRALIZADAS
// ============================================

/**
 * Limpia prefijos numéricos de un segmento de ruta
 * Ej: "02-cinematica" -> "cinematica"
 */
export function cleanSegment(segment: string): string {
  return segment.replace(/^\d+-/, '').toLowerCase();
}

/**
 * Verifica si un contenido markdown tiene al menos un título H1
 */
export function hasValidH1(content: string | undefined): boolean {
  if (!content) return false;
  return /^#\s+.+$/m.test(content);
}

/**
 * Verifica si un capítulo es válido (tiene _meta.json con name)
 * @param materia - Slug de la materia
 * @param capitulo - Slug del capítulo (puede tener prefijo numérico)
 */
export function isValidCapitulo(materia: string, capitulo: string): boolean {
  const key = `${materia}/${cleanSegment(capitulo)}`;
  return hasValidMetaName(key);
}

/**
 * Verifica si un tema es válido (tiene _meta.json con name)
 * @param materia - Slug de la materia
 * @param capitulo - Slug del capítulo
 * @param tema - Slug del tema (puede tener prefijo numérico)
 */
export function isValidTema(materia: string, capitulo: string, tema: string): boolean {
  const key = `${materia}/${cleanSegment(capitulo)}/${cleanSegment(tema)}`;
  return hasValidMetaName(key);
}

/**
 * Verifica si una lección es válida:
 * - Tiene al menos un H1
 * - Su capítulo tiene _meta.json con name
 * - Su tema tiene _meta.json con name
 * @param lesson - Objeto de lección con slug/id y body
 * @param materia - Slug de la materia
 */
export function isValidLesson(lesson: { slug?: string; id?: string; body?: string }, materia: string): boolean {
  const slug = lesson.slug || lesson.id || '';
  const parts = slug.split('/');
  if (parts.length < 2) return false;
  
  const [capitulo, tema] = parts;
  
  return hasValidH1(lesson.body) && 
         isValidCapitulo(materia, capitulo) && 
         isValidTema(materia, capitulo, tema);
}
