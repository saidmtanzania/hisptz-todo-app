import FilterBar from '../FilterBar/FilterBar'
import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className="mx-auto">
      <div className="lg:flex gap-2 ml-3">
        <div className="relative mb-2">
          <input
            type="text"
            id="id"
            placeholder="Search by ID"
            className={styles.search__input}
          />

          <span className={styles.search__span}>
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
