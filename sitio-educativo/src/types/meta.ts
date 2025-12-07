/**
 * Tipos para metadatos de navegación
 * Define la estructura de _meta.json y allMeta
 */

// Estructura de un archivo _meta.json
export interface MetaEntry {
  name: string;
  description?: string;
  order?: number;
  icon?: string;
}

// Tipo para el objeto allMeta que contiene todos los metadatos
export type AllMeta = Record<string, MetaEntry>;

// Función helper para obtener el nombre de un metadato de forma segura
export function getMetaName(
  allMeta: AllMeta,
  key: string,
  fallback: string
): string {
  return allMeta[key]?.name ?? fallback;
}

// Función helper para obtener la descripción de un metadato
export function getMetaDescription(
  allMeta: AllMeta,
  key: string,
  fallback?: string
): string | undefined {
  return allMeta[key]?.description ?? fallback;
}

// Función helper para verificar si existe un metadato
export function hasMetaEntry(allMeta: AllMeta, key: string): boolean {
  return key in allMeta;
}
