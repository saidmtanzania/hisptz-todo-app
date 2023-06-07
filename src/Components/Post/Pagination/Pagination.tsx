import styles from './Pagination.module.css'

function Pagination(props: any) {
  return (
    <div className={styles.pagination__main}>
      <div className={styles.pagination__min}>
        <button
          type="button"
          className={styles.pagination__link}
          onClick={props.goToPreviousPage}
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div>
          <label htmlFor="PaginationPage" className="sr-only">
            Page
          </label>

          <input
            type="number"
            className={styles.pagination__input}
            min="1"
            value={props.page}
            id="PaginationPage"
            onChange={props.handlePageChange}
          />
        </div>

        <button
          type="button"
          className={styles.pagination__link}
          onClick={props.goToNextPage}
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Pagination
