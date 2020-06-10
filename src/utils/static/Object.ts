class Object {
  static objectHasProperty = (object: Record<string, unknown>, property: string) =>
    Object.prototype.hasOwnProperty.call(object, property);
}

export default Object;
