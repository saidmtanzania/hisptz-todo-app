import styles from './NewTodo.module.css'

function NewTodo() {
  return (
    <div className={styles.main__lay}>
      <label htmlFor="title" className={styles.label__title}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          className={styles.title__input + ' peer'}
        />

        <span
          className={
            styles.title__span +
            ' peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'
          }
        >
          Title
        </span>
      </label>
      <label htmlFor="Description" className={styles.label__title}>
        <textarea
          id="Description"
          placeholder="Description"
          className={styles.text__area + ' peer '}
        ></textarea>

        <span
          className={
            styles.desc__span +
            ' peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'
          }
        >
          Description
        </span>
      </label>
      <a className={styles.a__link} href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          className="h-8 w-8 rtl:rotate-180"
        >
          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        </svg>
      </a>
    </div>
  )
}

export default NewTodo
