export function formatName(slug) {
  return slug
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

export function buildNavigationFromLessonsWithCollection(lessons, collectionName, metaData = {}) {
  const navigation = {};
  
  // metaData estructura: { "unidad-slug": { name: "Nombre" }, "unidad-slug/bloque-slug": { name: "Nombre" } }
  const getUnidadName = (unidadSlug) => {
    const key = `${collectionName}/${unidadSlug}`;
    return metaData[key]?.name || formatName(unidadSlug);
  };
  
  const getBloqueName = (unidadSlug, bloqueSlug) => {
    const key = `${collectionName}/${unidadSlug}/${bloqueSlug}`;
    return metaData[key]?.name || formatBlockName(bloqueSlug);
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
        name: formatName(materia),
        slug: materia,
        unidades: {}
      };
    }
    
    if (!navigation[materia].unidades[unidad]) {
      navigation[materia].unidades[unidad] = {
        name: getUnidadName(unidad),
        slug: `${materia}/${unidad}`,
        bloques: {}
      };
    }
    
    if (!navigation[materia].unidades[unidad].bloques[bloque]) {
      navigation[materia].unidades[unidad].bloques[bloque] = {
        name: getBloqueName(unidad, bloque),
        slug: `${materia}/${unidad}/${bloque}`,
        lecciones: []
      };
    }
    
    navigation[materia].unidades[unidad].bloques[bloque].lecciones.push({
      title: lesson.data?.title || extractTitleFromContent(lesson.body || ''),
      slug: `${materia}/${lesson.slug}`,
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
