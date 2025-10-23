import { SearchBarProps } from "@/lib/types/searchbar-props";
import { useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";
import { searchMoviesAction } from "@/app/server-actions/search-movies";

export default function SearchBar({ query, onQueryChange, onResults }: SearchBarProps) {
    const [, startTransition] = useTransition();
    
    // Debounced search
        const debouncedSearch = useDebouncedCallback((value: string) => {
            if (value.trim().length < 2) {
            onResults([]);
            return;
            }
    
            startTransition(async () => {
                const movies = await searchMoviesAction(value);
                onResults(movies || []);
            });
        }, 400);
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            onQueryChange(value);
            debouncedSearch(value);
        };
    
    return(
        <div className="px-4 md:px-8 pb-2">
            <input
                type="text"
                placeholder="Search for a movie..."
                className="w-full text-black placeholder-neutral-600 focus:outline-none text-base py-2"
                value={query}
                onChange={handleChange}
            />
        </div>
    )
}