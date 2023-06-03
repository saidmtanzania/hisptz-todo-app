import styles from './main.module.css'

function Completed() {
  return (
    <strong
      className={styles.status__strong + ' bg-emerald-100 text-emerald-700'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="-ms-1 me-1.5 h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-[10px] font-medium sm:text-xs">Completed</span>
    </strong>
  )
}
export default Completed
