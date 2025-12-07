/**
 * Utilidad para limpiar código LaTeX de textos.
 * Convierte símbolos LaTeX a Unicode para mostrar en UI.
 */

// Mapa de símbolos LaTeX comunes a Unicode
const latexSymbols: Record<string, string> = {
  '\\Delta': 'Δ',
  '\\alpha': 'α',
  '\\beta': 'β',
  '\\gamma': 'γ',
  '\\delta': 'δ',
  '\\epsilon': 'ε',
  '\\zeta': 'ζ',
  '\\eta': 'η',
  '\\theta': 'θ',
  '\\iota': 'ι',
  '\\kappa': 'κ',
  '\\lambda': 'λ',
  '\\mu': 'μ',
  '\\nu': 'ν',
  '\\xi': 'ξ',
  '\\pi': 'π',
  '\\rho': 'ρ',
  '\\sigma': 'σ',
  '\\tau': 'τ',
  '\\upsilon': 'υ',
  '\\phi': 'φ',
  '\\chi': 'χ',
  '\\psi': 'ψ',
  '\\omega': 'ω',
  '\\Gamma': 'Γ',
  '\\Theta': 'Θ',
  '\\Lambda': 'Λ',
  '\\Xi': 'Ξ',
  '\\Pi': 'Π',
  '\\Sigma': 'Σ',
  '\\Phi': 'Φ',
  '\\Psi': 'Ψ',
  '\\Omega': 'Ω',
  '\\vec': '',
  '\\mathrm': '',
  '\\text': '',
  '\\frac': '',
  '\\sqrt': '√',
  '\\cdot': '·',
  '\\times': '×',
  '\\div': '÷',
  '\\pm': '±',
  '\\mp': '∓',
  '\\leq': '≤',
  '\\geq': '≥',
  '\\neq': '≠',
  '\\approx': '≈',
  '\\equiv': '≡',
  '\\infty': '∞',
  '\\sum': 'Σ',
  '\\prod': 'Π',
  '\\int': '∫',
  '\\partial': '∂',
  '\\nabla': '∇',
  '\\rightarrow': '→',
  '\\leftarrow': '←',
  '\\Rightarrow': '⇒',
  '\\Leftarrow': '⇐',
  '\\leftrightarrow': '↔',
  '\\uparrow': '↑',
  '\\downarrow': '↓',
  '\\degree': '°',
  '\\circ': '°',
  '\\prime': '′',
  '\\angle': '∠',
  '\\perp': '⊥',
  '\\parallel': '∥',
  '\\subset': '⊂',
  '\\supset': '⊃',
  '\\in': '∈',
  '\\notin': '∉',
  '\\cup': '∪',
  '\\cap': '∩',
  '\\emptyset': '∅',
  '\\forall': '∀',
  '\\exists': '∃',
  '\\neg': '¬',
  '\\land': '∧',
  '\\lor': '∨',
};

/**
 * Limpia el código LaTeX de un texto para mostrar en UI.
 * Estrategia simple: eliminar completamente las expresiones LaTeX entre $...$
 * Esto es más seguro que intentar convertirlas a Unicode.
 * 
 * @param text - Texto con posible código LaTeX
 * @returns Texto limpio sin LaTeX
 */
export function cleanLatex(text: string): string {
  if (!text) return '';
  
  let cleaned = text;

  // Eliminar completamente expresiones LaTeX display ($$...$$)
  cleaned = cleaned.replace(/\$\$[^$]+\$\$/g, '');
  
  // Eliminar completamente expresiones LaTeX inline ($...$)
  cleaned = cleaned.replace(/\$[^$]+\$/g, '');
  
  // Limpiar paréntesis vacíos que queden: () 
  cleaned = cleaned.replace(/\(\s*\)/g, '');
  
  // Limpiar espacios múltiples
  cleaned = cleaned.replace(/\s+/g, ' ').trim();

  return cleaned;
}

/**
 * Limpia el título de una lección para mostrar en navegación.
 * Elimina prefijos numéricos y limpia LaTeX.
 * 
 * @param title - Título con posible LaTeX y prefijos
 * @returns Título limpio
 */
export function cleanLessonTitle(title: string): string {
  // Primero limpiar LaTeX
  let cleaned = cleanLatex(title);
  
  // Eliminar prefijos numéricos comunes (01-, 1., etc.)
  cleaned = cleaned.replace(/^\d+[-.\s]+/, '');
  
  return cleaned;
}
