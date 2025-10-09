import Link from "next/link"
import Image from "next/image";
import { Jaro } from "next/font/google"

const jaro = Jaro({
    subsets: ["latin"],
    variable: "--font-jaro",
});

export default function Navbar() {
    return (
        <header>
            <nav className="flex items-center justify-between bg-orange-100 text-black py-4 px-4 md:px-8">
                {/* links */}
                <ul className="hidden md:flex md:text-2xl font-bold md:gap-6 md:w-1/3 md:justify-start">
                    <li>
                        <Link href={""} >
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            People
                        </Link>
                    </li>
                </ul>

                {/* logo with home link */}
                <div className="md:w-1/3 text-center">
                    <Link href={"/"} className={`${jaro.className} text-3xl md:text-5xl`}>
                        <span className="italic">My- </span>MDB
                    </Link>
                </div>

                {/* icons */}
                <div className="flex gap-6 md:w-1/3 justify-end">
                    <div className="w-[28px] h-[28px] relative">
                        <Image
                            src="/search.svg"
                            alt="Search Icon"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <div className="w-[28px] h-[28px] relative contain">
                        <Image
                            src="/user.svg"
                            alt="User Icon"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <div className="w-[28px] h-[28px] relative md:hidden">
                        <Image
                            src="/hamburger-menu.svg"
                            alt="Hamburger Menu Icon"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}