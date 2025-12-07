export function formatName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function formatBlockName(slug) {
  const match = slug.match(/^bloque-(\d+)-(.+)$/);
  if (match) {
    return `Bloque ${match[1]}: ${formatName(match[2])}`;
  }
  return formatName(slug);
}

export function extractOrder(filename) {
  const match = filename.match(/^(\d+)-/);
  return match ? parseInt(match[1]) : 999;
}

export function extractTitleFromContent(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : 'Sin título';
}

export function buildNavigationFromLessonsWithCollection(lessons, collectionName) {
  const navigation = {};
  
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
        name: formatName(unidad),
        slug: `${materia}/${unidad}`,
        bloques: {}
      };
    }
    
    if (!navigation[materia].unidades[unidad].bloques[bloque]) {
      navigation[materia].unidades[unidad].bloques[bloque] = {
        name: formatBlockName(bloque),
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
