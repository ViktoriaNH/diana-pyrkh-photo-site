import { useEffect,  useState } from "react";

const useScrollPosition = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    onScroll(); // установить начальное состояние

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
};

export default useScrollPosition;
