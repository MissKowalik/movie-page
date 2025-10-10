"use client"

import Link from "next/link"
import Image from "next/image"
import { Jaro } from "next/font/google"
import { useState } from "react"

const jaro = Jaro({
  subsets: ["latin"],
  variable: "--font-jaro",
})

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">

        {/* Shared backdrop for navbar + menu */}
        <div className="bg-white/60 backdrop-blur-md shadow-sm">
            <nav className="flex items-center justify-between py-4 px-4 md:px-8 text-black">
            
                {/* desktop navigation links */}
                <ul className="hidden md:flex md:text-2xl font-bold md:gap-6 md:w-1/3 md:justify-start">
                    <li>
                        <Link href={""}>
                            Movies
                        </Link></li>
                    <li>
                        <Link href={""}>
                            People
                        </Link>
                    </li>
                </ul>

                {/* logo */}
                <div className="md:w-1/3 text-center">
                    <Link href={"/"} className={`${jaro.className} text-3xl md:text-5xl`}>
                        <span className="italic">My- </span>MDB
                    </Link>
                </div>

                {/* icons + hamburger */}
                <div className="flex gap-6 md:w-1/3 justify-end">
                    <div className="w-[28px] h-[28px] relative">
                        <Image 
                            src="/search.svg" 
                            alt="Search Icon" 
                            fill 
                            style={{ objectFit: "contain" }} 
                        />
                    </div>

                    <div className="w-[28px] h-[28px] relative">
                        <Image 
                            src="/user.svg" 
                            alt="User Icon" 
                            fill 
                            style={{ objectFit: "contain" }} 
                        />
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-[28px] h-[28px] relative md:hidden hover:cursor-pointer"
                    >
                    <Image
                        src={"/hamburger-menu.svg"}
                        alt="Menu Toggle"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                    </button>
                </div>
            </nav>

            {/* mobile dropdown — part of the same backdrop container */}
            {menuOpen && (
                <div className="md:hidden text-black">
                    <ul className="flex flex-col text-xl font-light pb-4 px-4 space-y-4">
                        <li>
                            <Link href={""} className="flex items-center justify-between">
                                <span>Movies</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-4 h-4 md:hidden">
                                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href={""} className="flex items-center justify-between">
                                <span>People</span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-4 h-4 md:hidden">
                                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    </header>
  )
}
