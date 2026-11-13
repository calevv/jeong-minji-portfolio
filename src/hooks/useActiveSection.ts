import { useEffect, useState } from "react";

export default function useActiveSection(ids: string[], enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActiveId(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveId(id);
          } else {
            setActiveId((prev) => (prev === id ? null : prev));
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids, enabled]);

  return activeId;
}
