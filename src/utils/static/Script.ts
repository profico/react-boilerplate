class Script {
  static loadAsync = (src: string, callback?: () => void) => {
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

  static exists = (src: string) => Boolean(document.querySelector(`script[src="${src}"]`));
}

export default Script;
