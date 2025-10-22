import Link from "next/link"
import Image from "next/image";
import { HeroBackdropProps } from "@/lib/types/hero-backdrop-props";



export default function HeroBackdrop({movie, backdropLink}: HeroBackdropProps) {
    return (
        <>
            {backdropLink ? (
                // if backdropLink is passed through as a prop
                <Link href={backdropLink}>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={`Backdrop image of ${movie.title}`}
                        fill  // Makes the image fill the parent container
                        style={{ objectFit: "cover" }}  // Ensures image covers the area without distortion
                        sizes="100vw"  // Responsive image sizing for optimization
                        priority  // Loads image early for better UX
                    />
                </Link>
            ) : (
                // otherwise
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={`Backdrop image of ${movie.title}`}
                    fill  // Makes the image fill the parent container
                    style={{ objectFit: "cover" }}  // Ensures image covers the area without distortion
                    sizes="100vw"  // Responsive image sizing for optimization
                    priority  // Loads image early for better UX
                />
            )}
        </>
    )
}