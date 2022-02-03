export const objectHasProperty = (object: Record<string, unknown>, property: string): boolean =>
  Object.prototype.hasOwnProperty.call(object, property);
