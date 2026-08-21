// opencc-js publishes its raw dictionaries under a wildcard subpath export
// ("./*": "./dist/esm-lib/*.js") that ships no type declarations, and because
// the specifier *does* resolve to a real .js file, an ambient `declare module`
// cannot type it. Importing them here — once — keeps the suppression in a single
// place and gives the rest of the package plain `string` dictionaries.
//
// Each module default-exports one serialized dictionary: "src dst|src dst|…".

// @ts-ignore untyped opencc-js dictionary subpath
import cjkCompatibilityIdeographs from 'opencc-js/dict/CJK_Compatibility_Ideographs';
// @ts-ignore untyped opencc-js dictionary subpath
import tsCharacters from 'opencc-js/dict/TSCharacters';
// @ts-ignore untyped opencc-js dictionary subpath
import tsPhrases from 'opencc-js/dict/TSPhrases';
// @ts-ignore untyped opencc-js dictionary subpath
import stCharacters from 'opencc-js/dict/STCharacters';

/** Unicode CJK compatibility ideographs → their canonical code points. */
export const CJK_COMPATIBILITY_IDEOGRAPHS: string = cjkCompatibilityIdeographs;

/** 繁體 → 简体, character level (many-to-one, therefore safe to fold on). */
export const TS_CHARACTERS: string = tsCharacters;

/** 繁體 → 简体, phrase level. Small: ~4 kB gzip. */
export const TS_PHRASES: string = tsPhrases;

/** 简体 → 繁體, character level. Ambiguous words need the phrase dictionary. */
export const ST_CHARACTERS: string = stCharacters;

// The 简体→繁體 phrase dictionary (~400 kB gzip) is deliberately NOT imported
// here: this module is in the API's import graph, and a dynamic import placed
// here would still be bundled into the Worker. It lives in ./hant-phrases.ts,
// which only the web app imports.
