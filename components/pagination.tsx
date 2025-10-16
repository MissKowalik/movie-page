"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Extract current "page" parameter from the URL or default to page 1
    const pageParam = searchParams.get("page");
    const currentPage = pageParam ? parseInt(pageParam) : 1;

    // Helper function to navigate to a specified page
    const goToPage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());  // Copy current query parameters
        params.set("page", String(page));  // Update the "page" parameter
        router.push(`?${params.toString()}`);  // Navigate to the new query string
    };

  return (
    <div className="flex justify-center gap-4 p-12 items-center">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <span className="hidden">previous page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            viewBox="0 -960 960 960"
            width="16px"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <span className="hidden">next page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16px"
            viewBox="0 -960 960 960"
            width="16px"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
      </button>
    </div>
  );
}
