"use client"

import MovieCard from "../movie-card";
import { CardRowProps } from "@/lib/types/cardrow-props";
import CardRowHeading from "./card-row-heading";
import UseHorizontalScroll from "./use-horizontal-scroll";
import ScrollButton from "./scroll-button";


export default function CardRow({ heading, movies, onMovieClick, headingLink }: CardRowProps) {
    // scroll logic
    const { scrollRef, canScrollLeft, canScrollRight, scroll } = UseHorizontalScroll();

    return (
        <section className="relative px-4 md:px-8 py-8 overflow-hidden">

            <CardRowHeading heading={heading} headingLink={headingLink}/>

            {/* left scroll button */}
            {canScrollLeft && <ScrollButton direction={"left"} onClick={() => scroll("left")}/>}

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
            {canScrollRight && <ScrollButton direction={"right"} onClick={() => scroll("right")} />}
        </section>
  );
}
