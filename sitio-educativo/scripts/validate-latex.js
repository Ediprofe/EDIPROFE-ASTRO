#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

const colors = {
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,
  blue: (text) => `\x1b[34m${text}\x1b[0m`,
};

async function validateLatexRendering() {
  console.log(colors.blue('🔍 Validando renderizado LaTeX...'));
  
  const distDir = path.join(process.cwd(), 'dist');
  
  try {
    await fs.access(distDir);
  } catch {
    console.log(colors.yellow('⚠️ Directorio dist/ no encontrado. Ejecuta "npm run build" primero.'));
    return;
  }
  
  const htmlFiles = await glob('dist/**/*.html');
  let errors = [];
  let warnings = [];
  
  const criticalPatterns = [
    { regex: /\$\$[^$]+\$\$/, type: 'Display math', severity: 'error' },
    { regex: /(?<![\\])\$[^$\n]+\$/, type: 'Inline math', severity: 'error' },
    { regex: /\\begin\{(?!document)/, type: 'LaTeX environment', severity: 'error' },
    { regex: /\\frac\{/, type: 'LaTeX command', severity: 'error' },
    { regex: /\\mathbb\{/, type: 'Math font command', severity: 'warning' }
  ];
  
  for (const file of htmlFiles) {
    const content = await fs.readFile(file, 'utf-8');
    const relativePath = path.relative(process.cwd(), file);
    
    // Ignorar contenido dentro de etiquetas KaTeX (ya renderizado)
    const contentWithoutKatex = content.replace(/<span class="katex[\s\S]*?<\/span>/g, '');
    
    for (const { regex, type, severity } of criticalPatterns) {
      if (regex.test(contentWithoutKatex)) {
        const message = `${type} sin procesar en: ${relativePath}`;
        
        if (severity === 'error') {
          errors.push(message);
          console.error(colors.red(`❌ ${message}`));
        } else {
          warnings.push(message);
          console.warn(colors.yellow(`⚠️ ${message}`));
        }
      }
    }
    
    // Verificar que KaTeX CSS está incluido
    if (!content.includes('katex') && content.includes('class="math')) {
      warnings.push(`KaTeX CSS posiblemente no incluido en: ${relativePath}`);
    }
  }
  
  // Resumen
  console.log('\n' + colors.blue('═'.repeat(60)));
  
  if (errors.length === 0 && warnings.length === 0) {
    console.log(colors.green('✅ Todo el LaTeX se renderizó correctamente'));
    console.log(colors.green(`✅ ${htmlFiles.length} archivos verificados`));
  } else {
    if (errors.length > 0) {
      console.error(colors.red(`\n❌ Se encontraron ${errors.length} errores críticos`));
      process.exit(1);
    }
    if (warnings.length > 0) {
      console.warn(colors.yellow(`\n⚠️ Se encontraron ${warnings.length} advertencias`));
    }
  }
  
  console.log(colors.blue('═'.repeat(60)));
}

validateLatexRendering().catch(err => {
  console.error(colors.red('Error:', err.message));
  process.exit(1);
});
