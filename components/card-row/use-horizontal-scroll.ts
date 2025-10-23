import { useRef, useState, useEffect } from "react";

export default function UseHorizontalScroll() {
    const scrollRef = useRef<HTMLUListElement>(null);  // Reference to the horizontal scroll container
    
    // track if it's possible to scroll left/right
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // function to check scroll position and update states
    const checkScrollPosition = () => {
        if (!scrollRef.current) return;  // If the ref isn’t attached yet, do nothing.

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;  // extract key properties
        setCanScrollLeft(scrollLeft > 0);  // checks if any part of the content has been scrolled past on the left
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);  // checks if the right edge of the view is before the end of the scrollable content. (-1) compensates for rounding errors or subpixel differences
    };

    // scroll function
    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return; // If the ref isn’t attached yet, do nothing.

        const { clientWidth } = scrollRef.current;  // clientWidth = visible width of the element.
        const scrollAmount = direction === "left" ? -clientWidth * 0.85 : clientWidth * 0.85;  // If direction is left, we move left (-clientWidth); otherwise we move right.
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });  // Perform the scroll smoothly
    };

    // run once and on scroll
    useEffect(() => {
        checkScrollPosition(); // initial check
        const el = scrollRef.current;
        if (!el) return;

        el.addEventListener("scroll", checkScrollPosition);  // scroll listener: ensures that every time the element scrolls, the component re-evaluates whether it can scroll further in either direction
        window.addEventListener("resize", checkScrollPosition); // resize listener: ensures that if the user resizes the browser (changing the visible width of the scrollable area), the scroll states are recalculated
    
        return () => {
        el.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
        };
    }, []);

    return { scrollRef, canScrollLeft, canScrollRight, scroll };
}