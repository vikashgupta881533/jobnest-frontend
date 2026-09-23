import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Render this once, anywhere inside <Routes>'s Router.
// It has no visual output — it just watches the URL and scrolls
// the window to the top every time the path changes.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
