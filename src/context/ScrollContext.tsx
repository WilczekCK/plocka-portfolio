import React, { createContext, useState, useEffect, useContext } from "react";

export const ScrollContext = createContext({ highlighted: "hero", setHighlighted: () => {} });

export const ScrollProvider = ({ children }) => {
    const [highlighted, setHighlighted] = useState("hero");
    const sectionIds = ["hero", "o-mnie", "oferta", "portfolio", "kontakt", "blog"];

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);
                const lastVisible = visibleEntries.length > 0 ? visibleEntries[visibleEntries.length - 1] : null;

                console.log(visibleEntries);

                if (lastVisible) {
                    setHighlighted(lastVisible.target.id);
                } else {
                    const id = pickClosestToCenter();
                    if (id !== highlighted) {
                        setHighlighted("hero");
                    } else {
                        setHighlighted(id);
                    }
                }
            },
            { rootMargin: "-45% 0px -45% 0px" }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    const pickClosestToCenter = () => {
        const center = window.scrollY + window.innerHeight / 2;
    
        const positions = sectionIds.map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const top = el.getBoundingClientRect().top + window.scrollY;
          return { id, top };
        }).filter(Boolean) as { id: string; top: number }[];
    
        const before = positions.filter(p => p.top <= center).sort((a,b)=> b.top - a.top)[0];
        const after  = positions.filter(p => p.top >  center).sort((a,b)=> a.top - b.top)[0];
        return (before ?? after ?? { id: "hero" }).id;
      };
    

    const scrollFunction = (item) => {
        setHighlighted(item);

        const el = document.getElementById(item);
        if (!el) return;
        if (typeof window === "undefined") return null;

        const y = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        history.replaceState(null, "", `#${item}`);
    };

    return (
        <ScrollContext.Provider value={{ highlighted, setHighlighted, scrollFunction }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);