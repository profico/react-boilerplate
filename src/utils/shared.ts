export const loadAsyncScript = (src: string, callback?: () => void) => {
  const script = document.createElement('script');
  script.src = src;

  if (callback) {
    // @ts-ignore
    if (script.readyState) {
      // @ts-ignore
      script.onreadystatechange = () => {
        // @ts-ignore
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          // @ts-ignore
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => {
        callback();
      };
    }
  }

  document.head.appendChild(script);
};

export const scriptExists = (src: string) => Boolean(document.querySelector(`script[src="${src}"]`));

export const snakeCaseToCamelCase = (word: string) =>
  word.toLowerCase().replace(/([-_]\w)/g, (g) => g[1].toUpperCase());

export const objectHasProperty = (object: Record<string, unknown>, property: string) =>
  Object.prototype.hasOwnProperty.call(object, property);

export const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};

export const Breakpoints: { [key in 'XXS' | 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL']: number } = {
  XXS: 375,
  XS: 475,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1100,
  XXL: 1230,
};
