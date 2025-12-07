/**
 * Configuración centralizada de materias
 * Este archivo contiene toda la información de configuración de las materias
 * para evitar duplicación de código en múltiples archivos.
 */

export interface MateriaConfig {
  icon: string;
  color: string;
  gradient: string;
  lightBg: string;
  description: string;
}

export const MATERIAS_SLUGS = ['matematicas', 'fisica', 'quimica', 'ciencias'] as const;
export type MateriaSlug = typeof MATERIAS_SLUGS[number];

export const materiaConfig: Record<MateriaSlug, MateriaConfig> = {
  matematicas: {
    icon: '🧮',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    lightBg: 'rgba(239, 68, 68, 0.1)',
    description: 'Álgebra, geometría, cálculo y más'
  },
  fisica: {
    icon: '🚀',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    lightBg: 'rgba(59, 130, 246, 0.1)',
    description: 'Mecánica, ondas, termodinámica'
  },
  quimica: {
    icon: '⚛️',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f7, #9333ea)',
    lightBg: 'rgba(168, 85, 247, 0.1)',
    description: 'Química general y orgánica'
  },
  ciencias: {
    icon: '🌍',
    color: '#22c55e',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    lightBg: 'rgba(34, 197, 94, 0.1)',
    description: 'Biología y ciencias naturales'
  }
};

/**
 * Obtiene la configuración de una materia por su slug
 */
export function getMateriaConfig(slug: string): MateriaConfig {
  return materiaConfig[slug as MateriaSlug] || materiaConfig.fisica;
}

/**
 * Obtiene el icono de una materia
 */
export function getMateriaIcon(slug: string): string {
  return getMateriaConfig(slug).icon;
}

/**
 * Obtiene el color de una materia
 */
export function getMateriaColor(slug: string): string {
  return getMateriaConfig(slug).color;
}
