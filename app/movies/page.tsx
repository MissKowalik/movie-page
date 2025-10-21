import CardGrid from "@/components/card-grid"

export default function MoviesPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    return (
        <CardGrid searchParams={searchParams}/>
    )
}