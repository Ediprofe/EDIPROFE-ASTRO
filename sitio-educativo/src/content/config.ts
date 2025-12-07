import { defineCollection, z } from 'astro:content';

const lessonsSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  order: z.number().optional(),
  draft: z.boolean().optional().default(false),
});

const matematicasCollection = defineCollection({
  type: 'content',
  schema: lessonsSchema,
});

const fisicaCollection = defineCollection({
  type: 'content',
  schema: lessonsSchema,
});

const quimicaCollection = defineCollection({
  type: 'content',
  schema: lessonsSchema,
});

const cienciasCollection = defineCollection({
  type: 'content',
  schema: lessonsSchema,
});

export const collections = {
  'matematicas': matematicasCollection,
  'fisica': fisicaCollection,
  'quimica': quimicaCollection,
  'ciencias': cienciasCollection,
};
