import { useEffect } from "react";

/**
 * Mobile pe tables ko cards mein dikhane ke liye har <td> pe uske column ka
 * naam (data-label) laga deta hai. CSS (dashboard.css) us label ko
 * card ke andar "Role:", "Status:" jaisa dikhata hai.
 * Data baad mein load ho tab bhi chalta hai (MutationObserver).
 */
export default function useTableLabels(containerRef) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const label = () => {
      root.querySelectorAll("table").forEach((table) => {
        const heads = [...table.querySelectorAll("thead th")].map((th) => th.textContent.trim());
        if (!heads.length) return;
        table.querySelectorAll("tbody tr").forEach((tr) => {
          [...tr.children].forEach((td, i) => {
            const text = heads[i] || "";
            if (td.getAttribute("data-label") !== text) td.setAttribute("data-label", text);
          });
        });
      });
    };

    label();
    const observer = new MutationObserver(label);
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [containerRef]);
}
