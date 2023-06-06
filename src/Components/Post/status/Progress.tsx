import styles from './main.module.css'

function Pending(props: any) {
  const handleEditClick = () => {
    const data = {
      title: props.title,
      completed: true,
      description: props.description,
      created: props.created,
      lastUpdated: new Date().toISOString(),
      id: props.id,
    }
    props.handles(data)
  }
  return (
    <strong
      className={styles.status__strong + ' bg-amber-100 text-amber-700'}
      onClick={handleEditClick}
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
          d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
        />
      </svg>
      <span className={styles.status__span}>Progress</span>
    </strong>
  )
}

export default Pending
