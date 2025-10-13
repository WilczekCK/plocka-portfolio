import React, { createContext, useState, useEffect, useContext } from "react";

export const ScrollContext = createContext({ highlighted: "hero", setHighlighted: () => {} });

export const ScrollProvider = ({ children }) => {
    const [highlighted, setHighlighted] = useState("hero");

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                const vis = entries.find((e) => e.isIntersecting);
                if (vis) {
                    setHighlighted(vis.target.id);
                } else {
                    setHighlighted("hero");
                }
            },
            { rootMargin: "-40% 0px -50% 0px" }
        );

        ["hero", "o-mnie", "oferta", "portfolio", "kontakt", "blog"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

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