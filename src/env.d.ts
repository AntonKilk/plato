/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FIENTA_ORGANIZER_ID: string;
  readonly FIENTA_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
