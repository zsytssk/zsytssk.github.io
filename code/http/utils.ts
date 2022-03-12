export function parseParams(params: any): string {
  let result = "";
  for (const key in params) {
    result += `&${key}=${params[key]}`;
  }
  return result.slice(0, -1);
}
