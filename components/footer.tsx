import Link from "next/link";

export default function Footer() {
    return(
        <footer className="flex justify-center gap-6 text-xl py-10">
            <Link href="">
                About
            </Link>

            <Link href="">
                Contact
            </Link>
        </footer>
    )
}