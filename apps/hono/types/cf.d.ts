export interface Bindings {
  ASSETS: { get(key: string): Promise<string | null> }
}

interface HonoAppType {
  Bindings: Bindings
}