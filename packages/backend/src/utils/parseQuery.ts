export function parseQuery<T>(arg?: string): T {
  if (arg === undefined) {
    return {} as T;
  }
  try {
    return JSON.parse(arg);
  } catch (error) {
    return {} as T;
  }
}
