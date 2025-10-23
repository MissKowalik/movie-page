import Link from "next/link"

export default function MobileMenu({ onLinkClick }: {onLinkClick: () => void}) {
    return (
        <div className="md:hidden text-black">
            <ul className="flex flex-col text-xl font-light pb-4 px-4 space-y-4">
                <li>
                    <Link 
                        href="/movies" 
                        className="flex items-center justify-between" 
                        onClick={onLinkClick}
                    >
                        <span>Movies</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-4 h-4 md:hidden">
                            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                        </svg>
                    </Link>
                </li>
            </ul>
        </div>
    )
}