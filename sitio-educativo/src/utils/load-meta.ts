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
 * Carga todos los metadatos de _meta.json y los organiza por ruta
 * @returns Objeto con todos los metadatos indexados por ruta
 */
export function loadAllMeta(): AllMeta {
  const metaData: AllMeta = {};
  
  Object.entries(metaFiles).forEach(([path, module]) => {
    // path ejemplo: /src/content/fisica/cinematica/_meta.json
    // Extraer: fisica/cinematica
    const match = path.match(/\/src\/content\/(.+)\/_meta\.json$/);
    if (match && module) {
      const key = match[1]; // "fisica/cinematica" o "fisica/cinematica/01-introduccion"
      metaData[key] = module;
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
