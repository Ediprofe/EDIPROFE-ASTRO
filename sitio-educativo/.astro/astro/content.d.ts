declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"fisica": {
"01-introduccion-a-la-fisica/01-introduccion/01-la-fisica-y-sus-ramas.md": {
	id: "01-introduccion-a-la-fisica/01-introduccion/01-la-fisica-y-sus-ramas.md";
  slug: "01-introduccion-a-la-fisica/01-introduccion/01-la-fisica-y-sus-ramas";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/01-introduccion/02-metodo-cientifico.md": {
	id: "01-introduccion-a-la-fisica/01-introduccion/02-metodo-cientifico.md";
  slug: "01-introduccion-a-la-fisica/01-introduccion/02-metodo-cientifico";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/01-introduccion/03-medicion-y-cantidades-fisicas.md": {
	id: "01-introduccion-a-la-fisica/01-introduccion/03-medicion-y-cantidades-fisicas.md";
  slug: "01-introduccion-a-la-fisica/01-introduccion/03-medicion-y-cantidades-fisicas";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/01-introduccion/04-precision-y-exactitud.md": {
	id: "01-introduccion-a-la-fisica/01-introduccion/04-precision-y-exactitud.md";
  slug: "01-introduccion-a-la-fisica/01-introduccion/04-precision-y-exactitud";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/01-introduccion/05-cifras-significativas.md": {
	id: "01-introduccion-a-la-fisica/01-introduccion/05-cifras-significativas.md";
  slug: "01-introduccion-a-la-fisica/01-introduccion/05-cifras-significativas";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/02-notacion-cientifica/01-notacion-cientifica.md": {
	id: "01-introduccion-a-la-fisica/02-notacion-cientifica/01-notacion-cientifica.md";
  slug: "01-introduccion-a-la-fisica/02-notacion-cientifica/01-notacion-cientifica";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/02-notacion-cientifica/02-forma-estandar-y-notacion-cientifica.md": {
	id: "01-introduccion-a-la-fisica/02-notacion-cientifica/02-forma-estandar-y-notacion-cientifica.md";
  slug: "01-introduccion-a-la-fisica/02-notacion-cientifica/02-forma-estandar-y-notacion-cientifica";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/02-notacion-cientifica/03-suma-y-resta-en-notacion-cientifica.md": {
	id: "01-introduccion-a-la-fisica/02-notacion-cientifica/03-suma-y-resta-en-notacion-cientifica.md";
  slug: "01-introduccion-a-la-fisica/02-notacion-cientifica/03-suma-y-resta-en-notacion-cientifica";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/02-notacion-cientifica/04-multiplicacion-y-division-en-notacion-cientifica.md": {
	id: "01-introduccion-a-la-fisica/02-notacion-cientifica/04-multiplicacion-y-division-en-notacion-cientifica.md";
  slug: "01-introduccion-a-la-fisica/02-notacion-cientifica/04-multiplicacion-y-division-en-notacion-cientifica";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/02-notacion-cientifica/05-taller-notacion-cientifica.md": {
	id: "01-introduccion-a-la-fisica/02-notacion-cientifica/05-taller-notacion-cientifica.md";
  slug: "01-introduccion-a-la-fisica/02-notacion-cientifica/05-taller-notacion-cientifica";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/03-conversion-de-unidades/01-factores-de-conversion.md": {
	id: "01-introduccion-a-la-fisica/03-conversion-de-unidades/01-factores-de-conversion.md";
  slug: "01-introduccion-a-la-fisica/03-conversion-de-unidades/01-factores-de-conversion";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/03-conversion-de-unidades/02-taller-factores-de-conversion copy.md": {
	id: "01-introduccion-a-la-fisica/03-conversion-de-unidades/02-taller-factores-de-conversion copy.md";
  slug: "01-introduccion-a-la-fisica/03-conversion-de-unidades/02-taller-factores-de-conversion-copy";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/03-conversion-de-unidades/03-factores-de-conversion-compuestos.md": {
	id: "01-introduccion-a-la-fisica/03-conversion-de-unidades/03-factores-de-conversion-compuestos.md";
  slug: "01-introduccion-a-la-fisica/03-conversion-de-unidades/03-factores-de-conversion-compuestos";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/03-conversion-de-unidades/04-taller-factores-de-conversion-compuestos.md": {
	id: "01-introduccion-a-la-fisica/03-conversion-de-unidades/04-taller-factores-de-conversion-compuestos.md";
  slug: "01-introduccion-a-la-fisica/03-conversion-de-unidades/04-taller-factores-de-conversion-compuestos";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/04-vectores/01-escalares-y-vectores.md": {
	id: "01-introduccion-a-la-fisica/04-vectores/01-escalares-y-vectores.md";
  slug: "01-introduccion-a-la-fisica/04-vectores/01-escalares-y-vectores";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/04-vectores/02-elementos-de-un-vector.md": {
	id: "01-introduccion-a-la-fisica/04-vectores/02-elementos-de-un-vector.md";
  slug: "01-introduccion-a-la-fisica/04-vectores/02-elementos-de-un-vector";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/04-vectores/03-representacion-de-vectores-en-el-plano.md": {
	id: "01-introduccion-a-la-fisica/04-vectores/03-representacion-de-vectores-en-el-plano.md";
  slug: "01-introduccion-a-la-fisica/04-vectores/03-representacion-de-vectores-en-el-plano";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/04-vectores/04-suma-y-resta-de-vectores.md": {
	id: "01-introduccion-a-la-fisica/04-vectores/04-suma-y-resta-de-vectores.md";
  slug: "01-introduccion-a-la-fisica/04-vectores/04-suma-y-resta-de-vectores";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/04-vectores/05-multiplicacion-de-vectores copy.md": {
	id: "01-introduccion-a-la-fisica/04-vectores/05-multiplicacion-de-vectores copy.md";
  slug: "01-introduccion-a-la-fisica/04-vectores/05-multiplicacion-de-vectores-copy";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"01-introduccion-a-la-fisica/04-vectores/06-taller-vectores.md": {
	id: "01-introduccion-a-la-fisica/04-vectores/06-taller-vectores.md";
  slug: "01-introduccion-a-la-fisica/04-vectores/06-taller-vectores";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"02-cinematica/01-introduccion/01-la-cinematica.md": {
	id: "02-cinematica/01-introduccion/01-la-cinematica.md";
  slug: "02-cinematica/01-introduccion/01-la-cinematica";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"02-cinematica/01-introduccion/02-posicion-y-marco-de-referencia.md": {
	id: "02-cinematica/01-introduccion/02-posicion-y-marco-de-referencia.md";
  slug: "02-cinematica/01-introduccion/02-posicion-y-marco-de-referencia";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"02-cinematica/02-escalares-y-vectores/01-distancia-y-desplazamiento.md": {
	id: "02-cinematica/02-escalares-y-vectores/01-distancia-y-desplazamiento.md";
  slug: "02-cinematica/02-escalares-y-vectores/01-distancia-y-desplazamiento";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"02-cinematica/02-escalares-y-vectores/02-rapidez-y-velocidad.md": {
	id: "02-cinematica/02-escalares-y-vectores/02-rapidez-y-velocidad.md";
  slug: "02-cinematica/02-escalares-y-vectores/02-rapidez-y-velocidad";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"02-cinematica/03-MRU/01-introduccion.md": {
	id: "02-cinematica/03-MRU/01-introduccion.md";
  slug: "02-cinematica/03-mru/01-introduccion";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"02-cinematica/03-MRU/02-formulas.md": {
	id: "02-cinematica/03-MRU/02-formulas.md";
  slug: "02-cinematica/03-mru/02-formulas";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"02-cinematica/04-MRUA/01-introduccion.md": {
	id: "02-cinematica/04-MRUA/01-introduccion.md";
  slug: "02-cinematica/04-mrua/01-introduccion";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
"02-cinematica/04-MRUA/02-formulas.md": {
	id: "02-cinematica/04-MRUA/02-formulas.md";
  slug: "02-cinematica/04-mrua/02-formulas";
  body: string;
  collection: "fisica";
  data: any
} & { render(): Render[".md"] };
};
"quimica": {
"01-la-materia/01-introduccion/01-la-materia-y-sus-fases.md": {
	id: "01-la-materia/01-introduccion/01-la-materia-y-sus-fases.md";
  slug: "01-la-materia/01-introduccion/01-la-materia-y-sus-fases";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"01-la-materia/02-propiedades/01-masa-y-volumen.md": {
	id: "01-la-materia/02-propiedades/01-masa-y-volumen.md";
  slug: "01-la-materia/02-propiedades/01-masa-y-volumen";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"01-la-materia/02-propiedades/02-densidad.md": {
	id: "01-la-materia/02-propiedades/02-densidad.md";
  slug: "01-la-materia/02-propiedades/02-densidad";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"01-la-materia/02-propiedades/03-temperatura.md": {
	id: "01-la-materia/02-propiedades/03-temperatura.md";
  slug: "01-la-materia/02-propiedades/03-temperatura";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"01-la-materia/02-propiedades/04-conductividad-electrica.md": {
	id: "01-la-materia/02-propiedades/04-conductividad-electrica.md";
  slug: "01-la-materia/02-propiedades/04-conductividad-electrica";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"01-la-materia/02-propiedades/05-propiedades-cualitativas-y-cuantitativas.md": {
	id: "01-la-materia/02-propiedades/05-propiedades-cualitativas-y-cuantitativas.md";
  slug: "01-la-materia/02-propiedades/05-propiedades-cualitativas-y-cuantitativas";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"01-la-materia/02-propiedades/06-propiedades-intensivas-y-extensivas.md": {
	id: "01-la-materia/02-propiedades/06-propiedades-intensivas-y-extensivas.md";
  slug: "01-la-materia/02-propiedades/06-propiedades-intensivas-y-extensivas";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"01-la-materia/03-cambios/01-cambio-fisico-y-cambio-quimico.md": {
	id: "01-la-materia/03-cambios/01-cambio-fisico-y-cambio-quimico.md";
  slug: "01-la-materia/03-cambios/01-cambio-fisico-y-cambio-quimico";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"01-la-materia/04-tipos/01-de-que-esta-hecha-la-materia.md": {
	id: "01-la-materia/04-tipos/01-de-que-esta-hecha-la-materia.md";
  slug: "01-la-materia/04-tipos/01-de-que-esta-hecha-la-materia";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"01-la-materia/04-tipos/02-sustancias-puras-y-mezclas.md": {
	id: "01-la-materia/04-tipos/02-sustancias-puras-y-mezclas.md";
  slug: "01-la-materia/04-tipos/02-sustancias-puras-y-mezclas";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"02-separacion-de-mezclas/01-introduccion/01-las-mezclas-y-su-separacion.md": {
	id: "02-separacion-de-mezclas/01-introduccion/01-las-mezclas-y-su-separacion.md";
  slug: "02-separacion-de-mezclas/01-introduccion/01-las-mezclas-y-su-separacion";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"02-separacion-de-mezclas/02-tamizado/01-separacion-por-tamizado.md": {
	id: "02-separacion-de-mezclas/02-tamizado/01-separacion-por-tamizado.md";
  slug: "02-separacion-de-mezclas/02-tamizado/01-separacion-por-tamizado";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"02-separacion-de-mezclas/03-filtracion/01-separacion-por-filtracion.md": {
	id: "02-separacion-de-mezclas/03-filtracion/01-separacion-por-filtracion.md";
  slug: "02-separacion-de-mezclas/03-filtracion/01-separacion-por-filtracion";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"02-separacion-de-mezclas/04-decantacion/01-separacion-por-decantacion.md": {
	id: "02-separacion-de-mezclas/04-decantacion/01-separacion-por-decantacion.md";
  slug: "02-separacion-de-mezclas/04-decantacion/01-separacion-por-decantacion";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"02-separacion-de-mezclas/05-evaporacion/01-separacion-por-evaoracion.md": {
	id: "02-separacion-de-mezclas/05-evaporacion/01-separacion-por-evaoracion.md";
  slug: "02-separacion-de-mezclas/05-evaporacion/01-separacion-por-evaoracion";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"02-separacion-de-mezclas/06-destilacion/01-separacion-por-destilacion.md": {
	id: "02-separacion-de-mezclas/06-destilacion/01-separacion-por-destilacion.md";
  slug: "02-separacion-de-mezclas/06-destilacion/01-separacion-por-destilacion";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"02-separacion-de-mezclas/07-cromatografía/01-separacion-por-cromatografia.md": {
	id: "02-separacion-de-mezclas/07-cromatografía/01-separacion-por-cromatografia.md";
  slug: "02-separacion-de-mezclas/07-cromatografía/01-separacion-por-cromatografia";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"02-separacion-de-mezclas/08-Practica/01-taller-1.md": {
	id: "02-separacion-de-mezclas/08-Practica/01-taller-1.md";
  slug: "02-separacion-de-mezclas/08-practica/01-taller-1";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"03-estructura-atomica/02-introduccion/01-particulas-subatomicas-y-numero-atomico.md": {
	id: "03-estructura-atomica/02-introduccion/01-particulas-subatomicas-y-numero-atomico.md";
  slug: "03-estructura-atomica/02-introduccion/01-particulas-subatomicas-y-numero-atomico";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"03-estructura-atomica/03-atomos-neutros-e-iones/01-atomos-neutros-e-iones.md": {
	id: "03-estructura-atomica/03-atomos-neutros-e-iones/01-atomos-neutros-e-iones.md";
  slug: "03-estructura-atomica/03-atomos-neutros-e-iones/01-atomos-neutros-e-iones";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"03-estructura-atomica/03-atomos-neutros-e-iones/02-completa-la-tabla.md": {
	id: "03-estructura-atomica/03-atomos-neutros-e-iones/02-completa-la-tabla.md";
  slug: "03-estructura-atomica/03-atomos-neutros-e-iones/02-completa-la-tabla";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"ciencias": Record<string, {
  id: string;
  collection: "ciencias";
  data: any;
}>;
"matematicas": Record<string, {
  id: string;
  collection: "matematicas";
  data: any;
}>;

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
