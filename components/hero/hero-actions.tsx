export default function HeroActions() {
    return (
        <div className="flex flex-wrap mt-2 justify-center lg:justify-start gap-4">
            <button className="rounded-full max-w-[200] py-1 px-3 bg-amber-400 text-black font-semibold text-md hover:bg-neutral-800 hover:text-white transition-colors hover:cursor-pointer">
                Add to Watchlist
            </button>

            <button className="rounded-full max-w-[200] py-1 px-3 bg-gray-600/60 text-white font-semibold text-md hover:bg-neutral-200 hover:text-black transition-colors hover:cursor-pointer">
                Mark as watched
            </button>
        </div>
    )
}