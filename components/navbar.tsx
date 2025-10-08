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
            <nav className="flex items-center justify-between bg-orange-100 text-black p-4">
                {/* links */}
                <ul className="flex text-2xl font-bold gap-8 w-1/3 justify-start">
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
                <div className="w-1/3 text-center">
                    <Link href={"/"} className={`${jaro.className} text-5xl`}>
                        <span className="italic">My- </span>MDB
                    </Link>
                </div>

                {/* icons */}
                <div className="flex gap-8 w-1/3 justify-end">
                    <div className="w-[28px] h-[28px] relative">
                        <Image
                            src="/search.svg"
                            alt="Search Icon"
                            layout="fill"
                            objectFit="contain"
                            />
                    </div>

                    <div className="w-[28px] h-[28px] relative ">
                        <Image
                            src="/user.svg"
                            alt="User Icon"
                            layout="fill"
                            objectFit="contain"
                            />
                    </div>
                </div>
            </nav>
        </header>
    )
}