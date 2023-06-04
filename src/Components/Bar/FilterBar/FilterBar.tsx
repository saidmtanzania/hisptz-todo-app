import { useState } from 'react'
import styles from './FilterBar.module.css'

function FilterBar() {
  const [filters, setFilters] = useState({
    title: false,
    completed: false,
    description: false,
  })

  const handleFilterChange = (filterName: any) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }))
  }

  console.log(filters)

  return (
    <div className={styles.filter__main}>
      <div className={styles.filter__input}>
        <input
          id="title-checkbox"
          type="checkbox"
          value=""
          className={styles.filter__size}
          checked={filters.title}
          onChange={() => handleFilterChange('title')}
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
          checked={filters.completed}
          onChange={() => handleFilterChange('completed')}
        />
        <label htmlFor="completed-checkbox" className={styles.filter__label}>
          Completed
        </label>
      </div>
      <div className={styles.filter__input}>
        <input
          id="description-checkbox"
          type="checkbox"
          value=""
          className={styles.filter__size}
          checked={filters.description}
          onChange={() => handleFilterChange('description')}
        />
        <label htmlFor="description-checkbox" className={styles.filter__label}>
          Description
        </label>
      </div>
    </div>
  )
}

export default FilterBar
