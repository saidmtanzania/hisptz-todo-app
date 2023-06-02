import FilterBar from './FilterBar'

function SearchBar() {
  return (
    <div>
      <div className="lg:flex gap-2">
        <div className="relative mb-2">
          <input
            type="text"
            id="id"
            placeholder="Search by ID"
            className="w-full px-3 rounded-md border-gray-200 focus:outline-none py-2.5 pe-10 shadow-md sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button
              type="button"
              className="rounded-full p-0.5 text-white hover:bg-slate-400"
            >
              <span className="sr-only">Submit</span>
              <svg
                className="h-3 w-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="grey"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <FilterBar />
    </div>
  )
}

export default SearchBar
