import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `Photodar_di | ${title}` : "Photodar_di";
  }, [title]);
}

export default usePageTitle;