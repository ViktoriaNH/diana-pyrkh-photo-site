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
// const useHeaderState = () => {
//   const [state, setState] = useState<"visible" | "hidden" | "compact">("visible");
//   const lastScrollY = useRef(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentY = window.scrollY;

//       if (currentY < 50) {
//         setState("visible");
//       } else if (currentY > lastScrollY.current && currentY > 60) {
//         // Скроллим вниз → скрыть всё
//         setState("hidden");
//       } else if (currentY < lastScrollY.current - 10) {
//         // Скроллим вверх → показать только меню
//         setState("compact");
//       }

//       lastScrollY.current = currentY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return state;
// };

// export default useHeaderState;