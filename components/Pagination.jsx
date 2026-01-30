import Link from "next/link";

function Pagination({ page, pageSize, totalItem }) {
  const totalPages = Math.ceil(totalItem / pageSize);
  return (
    <section className="container mx-auto flex justify-center items-center my-8">
          {
              page!==1?(<Link
        className="mr-2 px-2 py-1 border border-gray-300 rounded"
        href={`/properties?page=${page > 1 ? page - 1 : page}`}
      >
        Previous
      </Link>):null
      }

      <span className="mx-2">
        Page {page} of {totalPages}
      </span>

          {
              page!==totalPages?(<Link
        disable="true"
        className="ml-2 px-2 py-1 border border-gray-300 rounded"
        href={`/properties?page=${page < totalPages ? page + 1 : page}`}
      >
        Next
      </Link>):null
      }
    </section>
  );
}

export default Pagination;
