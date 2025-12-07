// Cargar todos los archivos _meta.json usando import.meta.glob
const metaFiles = import.meta.glob('/src/content/**/_meta.json', { eager: true });

export function loadAllMeta() {
  const metaData = {};
  
  Object.entries(metaFiles).forEach(([path, module]) => {
    // path ejemplo: /src/content/fisica/cinematica/_meta.json
    // Extraer: fisica/cinematica
    const match = path.match(/\/src\/content\/(.+)\/_meta\.json$/);
    if (match) {
      const key = match[1]; // "fisica/cinematica" o "fisica/cinematica/01-introduccion"
      metaData[key] = module;
    }
  });
  
  return metaData;
}

export const allMeta = loadAllMeta();
