export const objectHasProperty = (object: Record<string, unknown>, property: string) =>
  Object.prototype.hasOwnProperty.call(object, property);
