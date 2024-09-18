import type { FastifyPluginAsync, FastifyPluginCallback, FastifyPluginOptions, FastifySchema, FastifySchemaCompiler, FastifyTypeProvider, RawServerBase, RawServerDefault } from 'fastify';
import type { FastifySerializerCompiler } from 'fastify/types/schema';
import type { ZodAny, ZodTypeAny, z } from 'zod';
type FreeformRecord = Record<string, any>;
export interface ZodTypeProvider extends FastifyTypeProvider {
    output: this['input'] extends ZodTypeAny ? z.infer<this['input']> : unknown;
}
interface Schema extends FastifySchema {
    hide?: boolean;
}
export declare const createJsonSchemaTransform: ({ skipList }: {
    skipList: readonly string[];
}) => ({ schema, url }: {
    schema: Schema;
    url: string;
}) => {
    schema: Schema;
    url: string;
} | {
    schema: FreeformRecord;
    url: string;
};
export declare const jsonSchemaTransform: ({ schema, url }: {
    schema: Schema;
    url: string;
}) => {
    schema: Schema;
    url: string;
} | {
    schema: FreeformRecord;
    url: string;
};
export declare const validatorCompiler: FastifySchemaCompiler<ZodAny>;
export declare const serializerCompiler: FastifySerializerCompiler<ZodAny | {
    properties: ZodAny;
}>;
/**
 * FastifyPluginCallbackZod with Zod automatic type inference
 *
 * @example
 * ```typescript
 * import { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
 *
 * const plugin: FastifyPluginCallbackZod = (fastify, options, done) => {
 *   done()
 * }
 * ```
 */
export type FastifyPluginCallbackZod<Options extends FastifyPluginOptions = Record<never, never>, Server extends RawServerBase = RawServerDefault> = FastifyPluginCallback<Options, Server, ZodTypeProvider>;
/**
 * FastifyPluginAsyncZod with Zod automatic type inference
 *
 * @example
 * ```typescript
 * import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
 *
 * const plugin: FastifyPluginAsyncZod = async (fastify, options) => {
 * }
 * ```
 */
export type FastifyPluginAsyncZod<Options extends FastifyPluginOptions = Record<never, never>, Server extends RawServerBase = RawServerDefault> = FastifyPluginAsync<Options, Server, ZodTypeProvider>;
export {};
