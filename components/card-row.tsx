"use client"

import MovieCard from "./movie-card";
import Image from "next/image";
import { CardRowProps } from "@/lib/types/cardrow-props";
import { useRef } from "react";


export default function CardRow({ heading, movies }: CardRowProps) {
    const scrollRef = useRef<HTMLUListElement>(null);  // Reference to the horizontal scroll container

    // check the current scroll position of the <ul> and adjusting it smoothly.
    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return; // If the ref isn’t attached yet, do nothing.
        const { clientWidth } = scrollRef.current;  // clientWidth = visible width of the element.
        const scrollAmount = direction === "left" ? -clientWidth * 0.85 : clientWidth * 0.85;  // If direction is left, we move left (-clientWidth); otherwise we move right.
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });  // Perform the scroll smoothly
    };

    return (
        <section className="relative px-4 md:px-8 py-8 overflow-hidden">
        <h2 className="text-xl lg:text-3xl pb-8">{heading}</h2>

            {/* left scroll button */}
            <button 
                className="absolute left-[3%] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 transition hover:cursor-pointer"
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

            {/* scrollable list of movie cards*/}
            <ul 
                ref={scrollRef}  // connecting the ul to scrollRef so we can scroll it
                className="grid grid-flow-col md:auto-cols-[minmax(200px,1fr)] gap-4 overflow-x-auto scrollbar-none"
            >
                {movies.map((movie) => (
                <li key={movie.id}>
                    <MovieCard movie={movie}/>
                </li>
                ))}
            </ul>

            {/* right scroll button */}
            <button 
                className="absolute right-[3%] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 transition hover:cursor-pointer"
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
        </section>
  );
}
