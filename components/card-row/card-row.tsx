"use client"

import MovieCard from "../movie-card";
import Image from "next/image";
import { CardRowProps } from "@/lib/types/cardrow-props";
import CardRowHeading from "./card-row-heading";
import UseHorizontalScroll from "./use-horizontal-scroll";


export default function CardRow({ heading, movies, onMovieClick, headingLink }: CardRowProps) {
    // scroll logic
    const { scrollRef, canScrollLeft, canScrollRight, scroll } = UseHorizontalScroll();

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
