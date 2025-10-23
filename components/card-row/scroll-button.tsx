import Image from "next/image";
import { ScrollButtonProps } from "@/lib/types/scroll-button-props";

export default function ScrollButton({ direction, onClick }: ScrollButtonProps) {
    const positionClass = direction === "left" ? "left-[3%]" : "right-[3%]";
    const iconSrc = direction === "left" ? "/arrow-backward.svg" : "/arrow-forward.svg";
    const altText = direction === "left" ? "Scroll left" : "Scroll right";
    
    return (
        <button 
            className={`hidden lg:block absolute ${positionClass} top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/70 hover:bg-black/90 transition hover:cursor-pointer`}
            onClick={onClick}
        >
            <Image
                src={iconSrc}
                alt={altText}
                width={20}
                height={20}
                className="invert"
            />
        </button>
    )
}