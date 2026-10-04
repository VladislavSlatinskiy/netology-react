function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

function toCamel(key: string): string {
  return key
    .replace(/[-_\s]+(.)?/g, (_: string, match: string | undefined) => (match ? match.toUpperCase() : ''))
    .replace(/^./, (match: string) => match.toLowerCase());
}

export function camelize<T extends object>(obj: unknown): T {
  if (isArray(obj)) {
    return obj.map(item => camelize(item)) as T;
  }
  if (isObject(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [toCamel(key), camelize(value)])
    ) as T;
  }
  return obj as T;
}