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
		"INSTRUCCIONES": {
"INSTRUCCIONES.md": {
	id: "INSTRUCCIONES.md";
  slug: "instrucciones";
  body: string;
  collection: "INSTRUCCIONES";
  data: any
} & { render(): Render[".md"] };
};
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
"matematicas": {
"01-aritmetica/01-operaciones-basicas-naturales/01-suma-y-resta.md": {
	id: "01-aritmetica/01-operaciones-basicas-naturales/01-suma-y-resta.md";
  slug: "01-aritmetica/01-operaciones-basicas-naturales/01-suma-y-resta";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/01-operaciones-basicas-naturales/02-multiplicacion.md": {
	id: "01-aritmetica/01-operaciones-basicas-naturales/02-multiplicacion.md";
  slug: "01-aritmetica/01-operaciones-basicas-naturales/02-multiplicacion";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/01-operaciones-basicas-naturales/03-division.md": {
	id: "01-aritmetica/01-operaciones-basicas-naturales/03-division.md";
  slug: "01-aritmetica/01-operaciones-basicas-naturales/03-division";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/02-teoria-de-numeros/01-multiplos-y-divisores.md": {
	id: "01-aritmetica/02-teoria-de-numeros/01-multiplos-y-divisores.md";
  slug: "01-aritmetica/02-teoria-de-numeros/01-multiplos-y-divisores";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/02-teoria-de-numeros/02-criterios-de-divisibilidad.md": {
	id: "01-aritmetica/02-teoria-de-numeros/02-criterios-de-divisibilidad.md";
  slug: "01-aritmetica/02-teoria-de-numeros/02-criterios-de-divisibilidad";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/02-teoria-de-numeros/03-numeros-primos-y-compuestos.md": {
	id: "01-aritmetica/02-teoria-de-numeros/03-numeros-primos-y-compuestos.md";
  slug: "01-aritmetica/02-teoria-de-numeros/03-numeros-primos-y-compuestos";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/02-teoria-de-numeros/04-descomposicion-en-factores-primos.md": {
	id: "01-aritmetica/02-teoria-de-numeros/04-descomposicion-en-factores-primos.md";
  slug: "01-aritmetica/02-teoria-de-numeros/04-descomposicion-en-factores-primos";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/02-teoria-de-numeros/05-mcm-y-mcd.md": {
	id: "01-aritmetica/02-teoria-de-numeros/05-mcm-y-mcd.md";
  slug: "01-aritmetica/02-teoria-de-numeros/05-mcm-y-mcd";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/03-fracciones/01-introduccion.md": {
	id: "01-aritmetica/03-fracciones/01-introduccion.md";
  slug: "01-aritmetica/03-fracciones/01-introduccion";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/03-fracciones/02-numeros-mixtos.md": {
	id: "01-aritmetica/03-fracciones/02-numeros-mixtos.md";
  slug: "01-aritmetica/03-fracciones/02-numeros-mixtos";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/03-fracciones/03-representacion-en-la-recta.md": {
	id: "01-aritmetica/03-fracciones/03-representacion-en-la-recta.md";
  slug: "01-aritmetica/03-fracciones/03-representacion-en-la-recta";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/03-fracciones/04-fracciones-equivalentes.md": {
	id: "01-aritmetica/03-fracciones/04-fracciones-equivalentes.md";
  slug: "01-aritmetica/03-fracciones/04-fracciones-equivalentes";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/03-fracciones/05-comparacion-de-fracciones.md": {
	id: "01-aritmetica/03-fracciones/05-comparacion-de-fracciones.md";
  slug: "01-aritmetica/03-fracciones/05-comparacion-de-fracciones";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/03-fracciones/06-suma-y-resta-fracciones.md": {
	id: "01-aritmetica/03-fracciones/06-suma-y-resta-fracciones.md";
  slug: "01-aritmetica/03-fracciones/06-suma-y-resta-fracciones";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/03-fracciones/07-multiplicacion-y-division-fracciones.md": {
	id: "01-aritmetica/03-fracciones/07-multiplicacion-y-division-fracciones.md";
  slug: "01-aritmetica/03-fracciones/07-multiplicacion-y-division-fracciones";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/04-decimales/01-concepto-y-lectura.md": {
	id: "01-aritmetica/04-decimales/01-concepto-y-lectura.md";
  slug: "01-aritmetica/04-decimales/01-concepto-y-lectura";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/04-decimales/02-conversion-fraccion-decimal.md": {
	id: "01-aritmetica/04-decimales/02-conversion-fraccion-decimal.md";
  slug: "01-aritmetica/04-decimales/02-conversion-fraccion-decimal";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/04-decimales/03-suma-y-resta-decimales.md": {
	id: "01-aritmetica/04-decimales/03-suma-y-resta-decimales.md";
  slug: "01-aritmetica/04-decimales/03-suma-y-resta-decimales";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/04-decimales/04-multiplicacion-decimales.md": {
	id: "01-aritmetica/04-decimales/04-multiplicacion-decimales.md";
  slug: "01-aritmetica/04-decimales/04-multiplicacion-decimales";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/04-decimales/05-division-decimales.md": {
	id: "01-aritmetica/04-decimales/05-division-decimales.md";
  slug: "01-aritmetica/04-decimales/05-division-decimales";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/05-proporcionalidad/01-razones-y-proporciones.md": {
	id: "01-aritmetica/05-proporcionalidad/01-razones-y-proporciones.md";
  slug: "01-aritmetica/05-proporcionalidad/01-razones-y-proporciones";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/05-proporcionalidad/02-proporcionalidad-directa-e-inversa.md": {
	id: "01-aritmetica/05-proporcionalidad/02-proporcionalidad-directa-e-inversa.md";
  slug: "01-aritmetica/05-proporcionalidad/02-proporcionalidad-directa-e-inversa";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/05-proporcionalidad/03-regla-de-tres-simple.md": {
	id: "01-aritmetica/05-proporcionalidad/03-regla-de-tres-simple.md";
  slug: "01-aritmetica/05-proporcionalidad/03-regla-de-tres-simple";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/05-proporcionalidad/04-regla-de-tres-compuesta.md": {
	id: "01-aritmetica/05-proporcionalidad/04-regla-de-tres-compuesta.md";
  slug: "01-aritmetica/05-proporcionalidad/04-regla-de-tres-compuesta";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/05-proporcionalidad/05-porcentajes.md": {
	id: "01-aritmetica/05-proporcionalidad/05-porcentajes.md";
  slug: "01-aritmetica/05-proporcionalidad/05-porcentajes";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/05-proporcionalidad/06-repartos-proporcionales.md": {
	id: "01-aritmetica/05-proporcionalidad/06-repartos-proporcionales.md";
  slug: "01-aritmetica/05-proporcionalidad/06-repartos-proporcionales";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/05-proporcionalidad/07-taller-aplicaciones.md": {
	id: "01-aritmetica/05-proporcionalidad/07-taller-aplicaciones.md";
  slug: "01-aritmetica/05-proporcionalidad/07-taller-aplicaciones";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/06-numeros-enteros/01-concepto-y-recta-numerica.md": {
	id: "01-aritmetica/06-numeros-enteros/01-concepto-y-recta-numerica.md";
  slug: "01-aritmetica/06-numeros-enteros/01-concepto-y-recta-numerica";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/06-numeros-enteros/02-valor-absoluto-y-orden.md": {
	id: "01-aritmetica/06-numeros-enteros/02-valor-absoluto-y-orden.md";
  slug: "01-aritmetica/06-numeros-enteros/02-valor-absoluto-y-orden";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/06-numeros-enteros/03-suma-y-resta-de-enteros.md": {
	id: "01-aritmetica/06-numeros-enteros/03-suma-y-resta-de-enteros.md";
  slug: "01-aritmetica/06-numeros-enteros/03-suma-y-resta-de-enteros";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/06-numeros-enteros/04-multiplicacion-division-ley-de-signos.md": {
	id: "01-aritmetica/06-numeros-enteros/04-multiplicacion-division-ley-de-signos.md";
  slug: "01-aritmetica/06-numeros-enteros/04-multiplicacion-division-ley-de-signos";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/07-conjuntos-numericos/01-conjuntos-numericos.md": {
	id: "01-aritmetica/07-conjuntos-numericos/01-conjuntos-numericos.md";
  slug: "01-aritmetica/07-conjuntos-numericos/01-conjuntos-numericos";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/07-conjuntos-numericos/02-taller-conjuntos-numericos.md": {
	id: "01-aritmetica/07-conjuntos-numericos/02-taller-conjuntos-numericos.md";
  slug: "01-aritmetica/07-conjuntos-numericos/02-taller-conjuntos-numericos";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/08-jerarquia-de-operaciones/01-operaciones-combinadas-sin-signos-agrupacion.md": {
	id: "01-aritmetica/08-jerarquia-de-operaciones/01-operaciones-combinadas-sin-signos-agrupacion.md";
  slug: "01-aritmetica/08-jerarquia-de-operaciones/01-operaciones-combinadas-sin-signos-agrupacion";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/08-jerarquia-de-operaciones/02-eliminacion-signos-agrupacion.md": {
	id: "01-aritmetica/08-jerarquia-de-operaciones/02-eliminacion-signos-agrupacion.md";
  slug: "01-aritmetica/08-jerarquia-de-operaciones/02-eliminacion-signos-agrupacion";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/09-potenciacion-radicacion-logaritmos/01-potenciacion-conceptos-basicos.md": {
	id: "01-aritmetica/09-potenciacion-radicacion-logaritmos/01-potenciacion-conceptos-basicos.md";
  slug: "01-aritmetica/09-potenciacion-radicacion-logaritmos/01-potenciacion-conceptos-basicos";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/09-potenciacion-radicacion-logaritmos/02-propiedades-de-la-potenciacion.md": {
	id: "01-aritmetica/09-potenciacion-radicacion-logaritmos/02-propiedades-de-la-potenciacion.md";
  slug: "01-aritmetica/09-potenciacion-radicacion-logaritmos/02-propiedades-de-la-potenciacion";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/09-potenciacion-radicacion-logaritmos/03-radicacion-conceptos-basicos.md": {
	id: "01-aritmetica/09-potenciacion-radicacion-logaritmos/03-radicacion-conceptos-basicos.md";
  slug: "01-aritmetica/09-potenciacion-radicacion-logaritmos/03-radicacion-conceptos-basicos";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/09-potenciacion-radicacion-logaritmos/04-propiedades-de-la-radicacion.md": {
	id: "01-aritmetica/09-potenciacion-radicacion-logaritmos/04-propiedades-de-la-radicacion.md";
  slug: "01-aritmetica/09-potenciacion-radicacion-logaritmos/04-propiedades-de-la-radicacion";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/09-potenciacion-radicacion-logaritmos/05-logaritmos-conceptos-basicos.md": {
	id: "01-aritmetica/09-potenciacion-radicacion-logaritmos/05-logaritmos-conceptos-basicos.md";
  slug: "01-aritmetica/09-potenciacion-radicacion-logaritmos/05-logaritmos-conceptos-basicos";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/09-potenciacion-radicacion-logaritmos/06-propiedades-de-los-logaritmos.md": {
	id: "01-aritmetica/09-potenciacion-radicacion-logaritmos/06-propiedades-de-los-logaritmos.md";
  slug: "01-aritmetica/09-potenciacion-radicacion-logaritmos/06-propiedades-de-los-logaritmos";
  body: string;
  collection: "matematicas";
  data: any
} & { render(): Render[".md"] };
"01-aritmetica/09-potenciacion-radicacion-logaritmos/07-operaciones-combinadas-avanzadas.md": {
	id: "01-aritmetica/09-potenciacion-radicacion-logaritmos/07-operaciones-combinadas-avanzadas.md";
  slug: "01-aritmetica/09-potenciacion-radicacion-logaritmos/07-operaciones-combinadas-avanzadas";
  body: string;
  collection: "matematicas";
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
"02-separacion-de-mezclas/05-evaporacion/01-separacion-por-evaporacion.md": {
	id: "02-separacion-de-mezclas/05-evaporacion/01-separacion-por-evaporacion.md";
  slug: "02-separacion-de-mezclas/05-evaporacion/01-separacion-por-evaporacion";
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
"03-estructura-atomica/04-numero-masico/01-masa-de-las-particulas-subatomicas.md": {
	id: "03-estructura-atomica/04-numero-masico/01-masa-de-las-particulas-subatomicas.md";
  slug: "03-estructura-atomica/04-numero-masico/01-masa-de-las-particulas-subatomicas";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"03-estructura-atomica/04-numero-masico/02-numero-masico.md": {
	id: "03-estructura-atomica/04-numero-masico/02-numero-masico.md";
  slug: "03-estructura-atomica/04-numero-masico/02-numero-masico";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"03-estructura-atomica/05-isotopos/01-isotopos.md": {
	id: "03-estructura-atomica/05-isotopos/01-isotopos.md";
  slug: "03-estructura-atomica/05-isotopos/01-isotopos";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"03-estructura-atomica/05-isotopos/02-completa-la-tabla.md": {
	id: "03-estructura-atomica/05-isotopos/02-completa-la-tabla.md";
  slug: "03-estructura-atomica/05-isotopos/02-completa-la-tabla";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/01-introduccion/01-introduccion.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/01-introduccion/01-introduccion.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/01-introduccion/01-introduccion";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/01-introduccion/02-repaso-estructura-atomica.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/01-introduccion/02-repaso-estructura-atomica.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/01-introduccion/02-repaso-estructura-atomica";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/01-introduccion/03-metales-y-no-metales.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/01-introduccion/03-metales-y-no-metales.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/01-introduccion/03-metales-y-no-metales";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/01-introduccion/04-filas-y-periodos.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/01-introduccion/04-filas-y-periodos.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/01-introduccion/04-filas-y-periodos";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/02-distribucion-de-los-electrones/01-distribucion-en-niveles-de-energia.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/02-distribucion-de-los-electrones/01-distribucion-en-niveles-de-energia.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/02-distribucion-de-los-electrones/01-distribucion-en-niveles-de-energia";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/03-principios-para-la-configuracion-electronica/01-principio-de-afbau-y-regla-de-las-diagonales.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/03-principios-para-la-configuracion-electronica/01-principio-de-afbau-y-regla-de-las-diagonales.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/03-principios-para-la-configuracion-electronica/01-principio-de-afbau-y-regla-de-las-diagonales";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/03-principios-para-la-configuracion-electronica/02-regla-de-hund.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/03-principios-para-la-configuracion-electronica/02-regla-de-hund.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/03-principios-para-la-configuracion-electronica/02-regla-de-hund";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/03-principios-para-la-configuracion-electronica/03-principio-de-exclusion-de-pauli.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/03-principios-para-la-configuracion-electronica/03-principio-de-exclusion-de-pauli.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/03-principios-para-la-configuracion-electronica/03-principio-de-exclusion-de-pauli";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/01-ejercicios-resueltos.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/01-ejercicios-resueltos.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/01-ejercicios-resueltos";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/02-notacion-de-gas-noble.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/02-notacion-de-gas-noble.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/02-notacion-de-gas-noble";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/03-bloques-de-la-tabla-periodica.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/03-bloques-de-la-tabla-periodica.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/03-bloques-de-la-tabla-periodica";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/04-configuracion-de-iones.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/04-configuracion-de-iones.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/04-configuracion-electronica/04-configuracion-de-iones";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"04-tabla-periodica-y-configuracion-electronica/05-propiedades-periodicas/01-propiedades-periodicas.md": {
	id: "04-tabla-periodica-y-configuracion-electronica/05-propiedades-periodicas/01-propiedades-periodicas.md";
  slug: "04-tabla-periodica-y-configuracion-electronica/05-propiedades-periodicas/01-propiedades-periodicas";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"05-enlace-quimico/06-estados-de-oxidacion/01-introduccion.md": {
	id: "05-enlace-quimico/06-estados-de-oxidacion/01-introduccion.md";
  slug: "05-enlace-quimico/06-estados-de-oxidacion/01-introduccion";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"05-enlace-quimico/06-estados-de-oxidacion/02-reglas-de-asignacion.md": {
	id: "05-enlace-quimico/06-estados-de-oxidacion/02-reglas-de-asignacion.md";
  slug: "05-enlace-quimico/06-estados-de-oxidacion/02-reglas-de-asignacion";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"05-enlace-quimico/06-estados-de-oxidacion/03-taller.md": {
	id: "05-enlace-quimico/06-estados-de-oxidacion/03-taller.md";
  slug: "05-enlace-quimico/06-estados-de-oxidacion/03-taller";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"06-reacciones-quimicas/01-introduccion/01-introduccion.md": {
	id: "06-reacciones-quimicas/01-introduccion/01-introduccion.md";
  slug: "06-reacciones-quimicas/01-introduccion/01-introduccion";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"06-reacciones-quimicas/01-introduccion/02-coeficiente-y-subindice.md": {
	id: "06-reacciones-quimicas/01-introduccion/02-coeficiente-y-subindice.md";
  slug: "06-reacciones-quimicas/01-introduccion/02-coeficiente-y-subindice";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"06-reacciones-quimicas/02-balanceo-de-ecuaciones/01-balanceo-y-fases-de-las-sustancias.md": {
	id: "06-reacciones-quimicas/02-balanceo-de-ecuaciones/01-balanceo-y-fases-de-las-sustancias.md";
  slug: "06-reacciones-quimicas/02-balanceo-de-ecuaciones/01-balanceo-y-fases-de-las-sustancias";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"06-reacciones-quimicas/03-tipos-de-reacciones/01-segun-el-mecanismo.md": {
	id: "06-reacciones-quimicas/03-tipos-de-reacciones/01-segun-el-mecanismo.md";
  slug: "06-reacciones-quimicas/03-tipos-de-reacciones/01-segun-el-mecanismo";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"06-reacciones-quimicas/03-tipos-de-reacciones/02-endotermicas-y-exotermicas.md": {
	id: "06-reacciones-quimicas/03-tipos-de-reacciones/02-endotermicas-y-exotermicas.md";
  slug: "06-reacciones-quimicas/03-tipos-de-reacciones/02-endotermicas-y-exotermicas";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"06-reacciones-quimicas/03-tipos-de-reacciones/03-reversibles-e-irreversibles.md": {
	id: "06-reacciones-quimicas/03-tipos-de-reacciones/03-reversibles-e-irreversibles.md";
  slug: "06-reacciones-quimicas/03-tipos-de-reacciones/03-reversibles-e-irreversibles";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"07-calculos-quimicos/01-mol-y-masa-molar/01-concepto-de-mol-y-masa-molar.md": {
	id: "07-calculos-quimicos/01-mol-y-masa-molar/01-concepto-de-mol-y-masa-molar.md";
  slug: "07-calculos-quimicos/01-mol-y-masa-molar/01-concepto-de-mol-y-masa-molar";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"07-calculos-quimicos/01-mol-y-masa-molar/02-calculo-de-la-masa-molar.md": {
	id: "07-calculos-quimicos/01-mol-y-masa-molar/02-calculo-de-la-masa-molar.md";
  slug: "07-calculos-quimicos/01-mol-y-masa-molar/02-calculo-de-la-masa-molar";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"07-calculos-quimicos/02-conversiones-mol-masa/01-mol-masa.md": {
	id: "07-calculos-quimicos/02-conversiones-mol-masa/01-mol-masa.md";
  slug: "07-calculos-quimicos/02-conversiones-mol-masa/01-mol-masa";
  body: string;
  collection: "quimica";
  data: any
} & { render(): Render[".md"] };
"07-calculos-quimicos/02-conversiones-mol-masa/02-mol-masa-particula.md": {
	id: "07-calculos-quimicos/02-conversiones-mol-masa/02-mol-masa-particula.md";
  slug: "07-calculos-quimicos/02-conversiones-mol-masa/02-mol-masa-particula";
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

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
