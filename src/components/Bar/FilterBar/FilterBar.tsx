import styles from './FilterBar.module.css'

function FilterBar() {
  return (
    <div className={styles.filter__main}>
      <div className={styles.filter__input}>
        <input
          id="title-checkbox"
          type="checkbox"
          value=""
          className={styles.filter__size}
        />
        <label htmlFor="title-checkbox" className={styles.filter__label}>
          Title
        </label>
      </div>
      <div className={styles.filter__input}>
        <input
          id="completed-checkbox"
          type="checkbox"
          value=""
          className={styles.filter__size}
        />
        <label htmlFor="completed-checkbox" className={styles.filter__label}>
          Completed
        </label>
      </div>
      <div className={styles.filter__input}>
        <input
          id="Description-checkbox"
          type="checkbox"
          value=""
          className={styles.filter__size}
        />
        <label htmlFor="Description-checkbox" className={styles.filter__label}>
          Description
        </label>
      </div>
    </div>
  )
}

export default FilterBar
