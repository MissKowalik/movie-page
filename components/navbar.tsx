"use client";

import Link from "next/link";
import Image from "next/image";
import { Jaro } from "next/font/google";
import { useState, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";
import { searchMoviesAction } from "@/app/server-actions/search-movies";
import CardRow from "./card-row/card-row";
import { Movie } from "@/lib/interfaces/movie";

const jaro = Jaro({
    subsets: ["latin"],
    variable: "--font-jaro",
});

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Movie[]>([]);
    const [, startTransition] = useTransition();

    // Debounced search
    const debouncedSearch = useDebouncedCallback((value: string) => {
        if (value.trim().length < 2) {
        setResults([]);
        return;
        }

        startTransition(async () => {
            const movies = await searchMoviesAction(value);
            setResults(movies || []);
        });
    }, 400);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        debouncedSearch(value);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">

            {/* Shared backdrop for navbar + menu */}
            <div className="bg-white/60 backdrop-blur-md">
                <nav className="flex items-center justify-between py-2 px-4 md:px-8 text-black">

                    {/* desktop navigation links */}
                    <ul className="hidden md:flex md:text-2xl font-bold md:gap-6 md:w-1/3 md:justify-start">
                        <li>
                            <Link 
                                href="/movies"
                                onClick={() => {
                                    if (searchOpen) {
                                        setQuery("");
                                        setResults([]);
                                    }
                                    setSearchOpen(false)
                                    setMenuOpen(false)
                                }}
                            >
                                Movies
                            </Link>
                        </li>
                    </ul>

                    {/* logo */}
                    <div className="md:w-1/3 text-center">
                        <Link
                            href="/"
                            className={`${jaro.className} text-3xl md:text-5xl`}
                            onClick={() => {
                                if (searchOpen) {
                                    setQuery("");
                                    setResults([]);
                                }
                                setSearchOpen(false)
                                setMenuOpen(false)
                            }}
                        >
                        <span className="italic">My- </span>MDB
                        </Link>
                    </div>

                    {/* icons + hamburger */}
                    <div className="flex gap-6 md:w-1/3 justify-end">
                        <button
                            onClick={() => {
                                if (searchOpen) {
                                    setQuery("");
                                    setResults([]);
                                }
                                setSearchOpen(!searchOpen)
                                setMenuOpen(false)
                            }}
                            className="w-[28px] h-[28px] relative hover:cursor-pointer"
                        >
                            <Image 
                                src="/search.svg" 
                                alt="Search Icon" 
                                fill 
                                style={{ objectFit: "contain" }} 
                            />
                        </button>

                        <div className="w-[28px] h-[28px] relative">
                            <Image 
                                src="/user.svg" 
                                alt="User Icon" 
                                fill 
                                style={{ objectFit: "contain" }} 
                            />
                        </div>

                        <button
                            onClick={() => {
                                if (searchOpen) {
                                    setQuery("");
                                    setResults([]);
                                }
                                setSearchOpen(false)
                                setMenuOpen(!menuOpen)
                            }}
                            className="w-[28px] h-[28px] relative md:hidden hover:cursor-pointer"
                        >
                            <Image 
                                src="/hamburger-menu.svg" 
                                alt="Menu Toggle" 
                                fill 
                                style={{ objectFit: "contain" }} 
                            />
                        </button>
                    </div>
                </nav>

                {/* searchbar */}
                {searchOpen && (
                <div className="px-4 md:px-8 pb-2">
                    <input
                        type="text"
                        placeholder="Search for a movie..."
                        className="w-full text-black placeholder-neutral-600 focus:outline-none text-base py-2"
                        value={query}
                        onChange={handleChange}
                    />
                </div>
                )}

                {/* mobile dropdown */}
                {menuOpen && (
                <div className="md:hidden text-black">
                    <ul className="flex flex-col text-xl font-light pb-4 px-4 space-y-4">
                    <li>
                        <Link 
                            href="#" 
                            className="flex items-center justify-between" 
                            onClick={() => 
                                setMenuOpen(false)
                            }
                        >
                            <span>Movies</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-4 h-4 md:hidden">
                                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#" 
                            className="flex items-center justify-between" 
                            onClick={() => setMenuOpen(false)}
                        >
                            <span>People</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-4 h-4 md:hidden">
                                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                            </svg>
                        </Link>
                    </li>
                    </ul>
                </div>
                )}

                {/* 🎬 Search results */}
                {results.length > 0 && (
                    <div className="pb-2">
                        <CardRow 
                            heading={`Results for "${query}"`} 
                            movies={results} 
                            onMovieClick={() => {
                                // Close search
                                setSearchOpen(false);
                                setQuery("");
                                setResults([]);
                            }}
                        />
                        <Link 
                            href={`/movies?query=${query}`} 
                            className="flex justify-self-center rounded-full max-w-[200] py-1 px-3 bg-neutral-300 text-black hover:bg-neutral-700 hover:text-white transition-colors"
                            onClick={() => {
                                // Close search
                                setSearchOpen(false);
                                setQuery("");
                                setResults([]);
                            }}
                        >
                            view all results
                        </Link>
                    </div>
                )}
            </div>

        
        </header>
    );
}
