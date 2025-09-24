import { useEffect, useState } from 'react';

const useScrollAnimation = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.3, immediate = false, customClass = '' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hiddenClass = customClass ? `hidden-${customClass}` : 'hidden';
    const showClass = customClass ? `show-${customClass}` : 'show';

    el.classList.add(hiddenClass);

    if (immediate) {
      setTimeout(() => {
        el.classList.add(showClass);
        setIsVisible(true);
      }, 100);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(showClass);
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [ref, threshold, immediate, customClass]);

  return isVisible;
};

export default useScrollAnimation;