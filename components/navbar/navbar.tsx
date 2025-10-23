"use client";

import Link from "next/link";
import Image from "next/image";
import { Jaro } from "next/font/google";
import { useState } from "react";
import { Movie } from "@/lib/interfaces/movie";
import SearchBar from "./searchbar";
import SearchResults from "./search-results";
import MobileMenu from "./mobile-menu";

const jaro = Jaro({
    subsets: ["latin"],
    variable: "--font-jaro",
});

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Movie[]>([]);

    const closeSearch = () => {
        setSearchOpen(false);
        setQuery("");
        setResults([]);
    }

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
                {searchOpen && <SearchBar query={query} onQueryChange={setQuery} onResults={setResults}/>}
                
                {/* search results */}
                <SearchResults query={query} results={results} onMovieClick={closeSearch} onViewAllClick={closeSearch} />

                {/* mobile dropdown menu */}
                {menuOpen && <MobileMenu onLinkClick={() => setMenuOpen(false)}/>}

            </div>
        </header>
    );
}