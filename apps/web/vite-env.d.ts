/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Absolute origin of the REST API, e.g. https://api.example.com. Empty = same-origin /api. */
  readonly VITE_API_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
