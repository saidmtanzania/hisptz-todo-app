import styles from './Login.module.css'
function LoginForm() {
  return (
    <div className="my-44 lg:my-20">
      <h1 className={styles.login__header}>To Do List.</h1>

      <div className="mx-auto lg:w-72">
        <label htmlFor="uname" className={styles.label__login}>
          <input
            type="text"
            id="uname"
            placeholder="Username"
            className={styles['form-label__input'] + ' peer'}
          />

          <span
            className={
              styles.form__span +
              ' peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'
            }
          >
            Username
          </span>
        </label>

        <label htmlFor="pass" className={styles.label__login}>
          <input
            type="password"
            id="pass"
            placeholder="Password"
            className={styles['form-label__input'] + ' peer'}
          />

          <span
            className={
              styles.form__span +
              ' peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'
            }
          >
            Password
          </span>
        </label>
        <a className={styles.form__link + ' group'} href="#">
          <span className={styles.a__span + ' group-hover:start-4'}>
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:ms-4">
            Login
          </span>
        </a>
      </div>
    </div>
  )
}

export default LoginForm
