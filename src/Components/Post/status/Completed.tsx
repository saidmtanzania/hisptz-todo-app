/* eslint-disable import/no-extraneous-dependencies */
import swal from 'sweetalert'
import styles from './main.module.css'

function Completed() {
  const handleEditClick = () => {
    swal({
      title: 'Are you sure?',
      text: 'you want to mark this as Progress',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Poof! Your imaginary file has been update!', {
          icon: 'success',
        })
      }
    })
  }
  return (
    <strong
      className={styles.status__strong + ' bg-emerald-100 text-emerald-700'}
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
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-[10px] font-medium sm:text-xs">Completed</span>
    </strong>
  )
}
export default Completed
