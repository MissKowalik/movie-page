import Link from "next/link";
import CardRow from "../card-row/card-row";
import { SearchResultsProps } from "@/lib/types/search-results-props";


export default function SearchResults({ query, results, onMovieClick, onViewAllClick }: SearchResultsProps) {
    if (results.length === 0) return null;
    
    return (
        <div className="pb-2">
            <CardRow 
                heading={`Results for "${query}"`} 
                movies={results} 
                onMovieClick={onMovieClick}
            />

            {/* view all button */}
            <Link 
                href={`/movies?query=${query}`} 
                className="flex justify-self-center rounded-full max-w-[200] py-1 px-3 bg-neutral-300 text-black hover:bg-neutral-700 hover:text-white transition-colors"
                onClick={onViewAllClick}
            >
                view all results
            </Link>
        </div>
    )
}