/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Absolute origin of the REST API, e.g. https://api.example.com. Empty = same-origin /api. */
  readonly VITE_API_BASE?: string;
  /** Cache-busting identity of the public data snapshot baked into a production release. */
  readonly VITE_PUBLIC_SNAPSHOT_VERSION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
