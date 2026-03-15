"use client";

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export type SectionKey = "hero" | "work" | "about" | "contact";

type NavigationContextType = {
  register: (key: SectionKey, el: HTMLElement | null) => void;
  scrollTo: (key: SectionKey) => void;
  activeSection: SectionKey;
};

const NavigationContext = createContext<NavigationContextType>({
  register: () => {},
  scrollTo: () => {},
  activeSection: "hero",
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const sectionMap = useRef<Map<SectionKey, HTMLElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeSection, setActiveSection] = useState<SectionKey>("hero");

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute("data-section") as SectionKey;
            if (key) setActiveSection(key);
          }
        });
      },
      // Top boundary: below the 64px fixed header. Bottom boundary: viewport midpoint.
      // A section becomes "active" when its top enters the upper half of the visible area.
      { rootMargin: "-80px 0px -50% 0px", threshold: 0 }
    );

    // Observe any sections already registered before the observer was created
    sectionMap.current.forEach((el) => observerRef.current!.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const register = useCallback((key: SectionKey, el: HTMLElement | null) => {
    if (el) {
      el.setAttribute("data-section", key);
      sectionMap.current.set(key, el);
      observerRef.current?.observe(el);
    } else {
      const existing = sectionMap.current.get(key);
      if (existing) observerRef.current?.unobserve(existing);
      sectionMap.current.delete(key);
    }
  }, []);

  const scrollTo = useCallback((key: SectionKey) => {
    sectionMap.current.get(key)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <NavigationContext.Provider value={{ register, scrollTo, activeSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
