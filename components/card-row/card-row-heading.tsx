import Link from "next/link"
import { CardRowHeadingProps } from "@/lib/types/cardrow-heading-props"

export default function CardRowHeading({headingLink, heading}: CardRowHeadingProps) {
    return (
        <>
            {/* turn heading into link if headingLink is passed along as a prop */}
            {headingLink ? (
                <Link href={headingLink}>
                    <h2 className="text-xl lg:text-3xl pb-8 hover:underline">{heading}</h2>
                </Link>
            ) : (
                <h2 className="text-xl lg:text-3xl pb-8">{heading}</h2>
            )}
        </>
    )
}