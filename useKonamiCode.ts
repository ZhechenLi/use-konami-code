import { useEffect, useState } from 'react';

const useKonamiCode = (callback: () => void) => {
  const [konamiCodeEntered, setKonamiCodeEntered] = useState(false);

  useEffect(() => {
    const konamiCode: string[] = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'KeyB',
      'KeyA',
    ];
    let konamiCodeIndex = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === konamiCode[konamiCodeIndex]) {
        konamiCodeIndex++;
        if (konamiCodeIndex === konamiCode.length) {
          setKonamiCodeEntered(true);
          callback();
        }
      } else {
        konamiCodeIndex = 0;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);

  return konamiCodeEntered;
};

export default useKonamiCode;
