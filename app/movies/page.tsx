import CardGrid from "@/components/card-grid"

export default function MovieOverview({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    return (
        <div className="flex flex-col items-center">
            <header className="flex self-start mt-18 md:mt-20 px-4 md:px-8 text-2xl font-bold pb-4 md:pt-4 md:pb-8">
                <h1 >Movies</h1>
            </header>
            <CardGrid searchParams={searchParams}/>
        </div>
    )
}