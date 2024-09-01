export function validNumber(value: string): string {
  return value.replace(/^0+(?!\.|$)/, "");
}
