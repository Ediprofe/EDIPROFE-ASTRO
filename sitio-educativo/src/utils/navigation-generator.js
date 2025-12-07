export function formatName(slug) {
  // Primero quitar prefijo numérico si existe
  const cleanSlug = slug.replace(/^\d+-/, '');
  return cleanSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function formatBlockName(slug) {
  const match = slug.match(/^(\d+)-(.+)$/);
  if (match) {
    return formatName(match[2]);
  }
  return formatName(slug);
}

export function extractOrder(filename) {
  const match = filename.match(/^(\d+)-/);
  return match ? parseInt(match[1]) : 999;
}

/**
 * Limpia un slug removiendo prefijos numéricos de cada segmento
 * Ej: "01-introduccion/02-tema/03-leccion" -> "introduccion/tema/leccion"
 */
export function cleanSlug(slug) {
  return slug
    .split('/')
    .map(segment => segment.replace(/^\d+-/, ''))
    .join('/');
}

/**
 * Limpia solo un segmento de slug (sin /)
 * Ej: "01-introduccion" -> "introduccion"
 */
export function cleanSegment(segment) {
  return segment.replace(/^\d+-/, '');
}

export function extractTitleFromContent(content) {
  const match = content.match(/^#\s+(.+)$/m);
  if (match) {
    // Limpiar: quitar **, emojis, y espacios extra
    return match[1]
      .replace(/\*\*/g, '')                              // Quitar negritas **
      .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')            // Quitar emojis
      .replace(/[\u{2600}-\u{26FF}]/gu, '')              // Quitar símbolos misc
      .replace(/[\u{2700}-\u{27BF}]/gu, '')              // Quitar dingbats
      .trim();
  }
  return 'Sin título';
}

// Cache para metadatos de carpetas
const metaCache = new Map();

export async function getMetaForPath(basePath, collectionName, unidad, bloque = null) {
  const pathKey = bloque 
    ? `${collectionName}/${unidad}/${bloque}`
    : `${collectionName}/${unidad}`;
  
  if (metaCache.has(pathKey)) {
    return metaCache.get(pathKey);
  }
  
  try {
    // Intentar importar el _meta.json dinámicamente
    const metaPath = bloque
      ? `../content/${collectionName}/${unidad}/${bloque}/_meta.json`
      : `../content/${collectionName}/${unidad}/_meta.json`;
    
    // Para Astro, usamos import.meta.glob
    const meta = { name: bloque ? formatBlockName(bloque) : formatName(unidad) };
    metaCache.set(pathKey, meta);
    return meta;
  } catch {
    const fallback = { name: bloque ? formatBlockName(bloque) : formatName(unidad) };
    metaCache.set(pathKey, fallback);
    return fallback;
  }
}

// Nombres de materias con tildes
const MATERIA_NAMES = {
  matematicas: 'Matemáticas',
  fisica: 'Física',
  quimica: 'Química',
  ciencias: 'Ciencias'
};

export function buildNavigationFromLessonsWithCollection(lessons, collectionName, metaData = {}) {
  const navigation = {};
  
  // metaData estructura: { "materia/capitulo": { name: "Nombre" }, "materia/capitulo/tema": { name: "Nombre" } }
  // Las claves en metaData están limpias (sin prefijos numéricos) y en minúsculas
  const getUnidadName = (unidadSlug) => {
    const cleanKey = `${collectionName}/${cleanSegment(unidadSlug).toLowerCase()}`;
    return metaData[cleanKey]?.name || formatName(unidadSlug);
  };
  
  const getBloqueName = (unidadSlug, bloqueSlug) => {
    const cleanKey = `${collectionName}/${cleanSegment(unidadSlug).toLowerCase()}/${cleanSegment(bloqueSlug).toLowerCase()}`;
    return metaData[cleanKey]?.name || formatBlockName(bloqueSlug);
  };
  
  lessons.forEach(lesson => {
    const parts = lesson.slug.split('/');
    // El slug de Astro es relativo a la colección: unidad/bloque/archivo
    if (parts.length < 3) return;
    
    const [unidad, bloque, archivo] = parts;
    const materia = collectionName;
    
    // Crear estructura de navegación
    if (!navigation[materia]) {
      navigation[materia] = {
        name: MATERIA_NAMES[materia] || formatName(materia),
        slug: materia,
        unidades: {}
      };
    }
    
    if (!navigation[materia].unidades[unidad]) {
      navigation[materia].unidades[unidad] = {
        name: getUnidadName(unidad),
        slug: `${materia}/${cleanSegment(unidad)}`,
        bloques: {}
      };
    }
    
    if (!navigation[materia].unidades[unidad].bloques[bloque]) {
      navigation[materia].unidades[unidad].bloques[bloque] = {
        name: getBloqueName(unidad, bloque),
        slug: `${materia}/${cleanSegment(unidad)}/${cleanSegment(bloque)}`,
        lecciones: []
      };
    }
    
    navigation[materia].unidades[unidad].bloques[bloque].lecciones.push({
      title: lesson.data?.title || extractTitleFromContent(lesson.body || ''),
      slug: `${materia}/${cleanSlug(lesson.slug)}`,
      order: extractOrder(archivo)
    });
  });
  
  // Ordenar todas las lecciones
  Object.values(navigation).forEach(materia => {
    Object.values(materia.unidades).forEach(unidad => {
      Object.values(unidad.bloques).forEach(bloque => {
        bloque.lecciones.sort((a, b) => a.order - b.order);
      });
    });
  });
  
  return navigation;
}

export function mergeNavigations(...navigations) {
  const merged = {};
  navigations.forEach(nav => {
    Object.entries(nav).forEach(([key, value]) => {
      if (!merged[key]) {
        merged[key] = value;
      } else {
        // Merge unidades
        Object.entries(value.unidades).forEach(([uKey, uValue]) => {
          if (!merged[key].unidades[uKey]) {
            merged[key].unidades[uKey] = uValue;
          } else {
            Object.entries(uValue.bloques).forEach(([bKey, bValue]) => {
              if (!merged[key].unidades[uKey].bloques[bKey]) {
                merged[key].unidades[uKey].bloques[bKey] = bValue;
              }
            });
          }
        });
      }
    });
  });
  return merged;
}
