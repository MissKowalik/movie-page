import Image from "next/image"

type NavbarIconsProps = {
    searchOpen: boolean;
    menuOpen: boolean;
    onToggleSearch: () => void;
    onToggleMenu: () => void;
    onResetSearch: () => void;
}

export default function NavbarIcons({ searchOpen, menuOpen, onToggleSearch, onToggleMenu, onResetSearch}: NavbarIconsProps) {
    return (
        <div className="flex gap-6 md:w-1/3 justify-end">
        
            {/* search icon */}
            <button
                onClick={() => {
                    if (searchOpen) {
                        onResetSearch();
                    }
                    onToggleSearch();
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
            
            {/* user icon */}
            <div className="w-[28px] h-[28px] relative">
                <Image 
                    src="/user.svg" 
                    alt="User Icon" 
                    fill 
                    style={{ objectFit: "contain" }} 
                />
            </div>
            
            {/* hamburger menu icon */}
            <button
                onClick={() => {
                    if (searchOpen) {
                        onResetSearch()
                    }
                    onToggleMenu()
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
    )
}