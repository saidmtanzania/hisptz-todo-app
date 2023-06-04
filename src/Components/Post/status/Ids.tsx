import styles from './main.module.css'
function Ids(props: any) {
  return (
    <strong className={styles.status__strong + ' bg-teal-600 text-white'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>

      <span className={styles.status__span}>{props.id}</span>
    </strong>
  )
}

export default Ids
