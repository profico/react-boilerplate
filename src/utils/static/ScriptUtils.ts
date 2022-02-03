class ScriptUtils {
  static loadAsync = (src: string, callback?: () => void): void => {
    const script = document.createElement('script');

    script.src = src;

    if (callback) {
      // @ts-ignore
      if (script.readyState) {
        // @ts-ignore
        script.onreadystatechange = (): void => {
          // @ts-ignore
          if (script.readyState === 'loaded' || script.readyState === 'complete') {
            // @ts-ignore
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        script.onload = (): void => {
          callback();
        };
      }
    }

    document.head.appendChild(script);
  };

  static exists = (src: string): boolean => Boolean(document.querySelector(`script[src="${src}"]`));
}

export default ScriptUtils;
