/// <reference types="vite/client" />
/// <reference types="vitest" />

declare module 'vite' {
  interface UserConfig {
    test?: {
      globals?: boolean
      environment?: string
      setupFiles?: string
    }
  }
}
