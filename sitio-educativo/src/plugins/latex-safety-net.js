import fs from 'fs/promises';
import { glob } from 'glob';

export async function latexSafetyNet(dir) {
  const files = await glob(`${dir}/**/*.html`);
  let errors = 0;
  
  const patterns = [
    { regex: /\$\$[^$]+\$\$/, name: 'Display math' },
    { regex: /(?<![\\])\$[^$\n]+\$/, name: 'Inline math' },
    { regex: /\\begin\{(?!document)/, name: 'LaTeX environments' },
    { regex: /\\frac\{/, name: 'LaTeX commands' }
  ];
  
  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    
    for (const { regex, name } of patterns) {
      if (regex.test(content)) {
        console.error(`❌ LaTeX sin procesar (${name}) en: ${file}`);
        errors++;
        
        // Auto-fix opcional
        const fixed = content
          .replace(/\$\$([\s\S]+?)\$\$/g, '<div class="math-error">Error renderizando fórmula</div>')
          .replace(/\$([^$]+?)\$/g, '<span class="math-error">$1</span>');
        
        await fs.writeFile(file, fixed);
      }
    }
  }
  
  return errors === 0;
}
