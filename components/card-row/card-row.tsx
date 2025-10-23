"use client"

import MovieCard from "../movie-card";
import Image from "next/image";
import { CardRowProps } from "@/lib/types/cardrow-props";
import { useRef, useState, useEffect } from "react";
import CardRowHeading from "./card-row-heading";


export default function CardRow({ heading, movies, onMovieClick, headingLink }: CardRowProps) {
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

    return (
        <section className="relative px-4 md:px-8 py-8 overflow-hidden">

            <CardRowHeading heading={heading} headingLink={headingLink}/>

            {/* left scroll button */}
            {canScrollLeft && (
                <button 
                    className="hidden lg:block absolute left-[3%] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 transition hover:cursor-pointer"
                    onClick={() => scroll("left")}
                >
                    <Image
                        src="/arrow-backward.svg"
                        alt="Scroll left"
                        width={20}
                        height={20}
                        className="invert"
                    />
                </button>
            )}

            {/* scrollable list of movie cards*/}
            <ul 
                ref={scrollRef}  // connecting the ul to scrollRef so we can scroll it
                className="grid grid-flow-col md:auto-cols-[minmax(200px,1fr)] gap-4 overflow-x-auto scrollbar-none"
            >
                {movies.map((movie) => (
                <li 
                    key={movie.id}
                    onClick={onMovieClick}
                >
                    <MovieCard movie={movie}/>
                </li>
                ))}
            </ul>

            {/* right scroll button */}
            {canScrollRight && (
                <button 
                    className="hidden lg:block absolute right-[3%] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 transition hover:cursor-pointer"
                    onClick={() => scroll("right")}
                >
                    <Image
                        src="/arrow-forward.svg"
                        alt="Scroll right"
                        width={20}
                        height={20}
                        className="invert"
                    />
                </button>
            )}
        </section>
  );
}
