import { simpleLogin } from '../Api/ApiClient'
import { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'

function LoginForm(props: any) {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: any) => {
    e.preventDefault()

    if (username === '') return

    const response: any = await simpleLogin(username)
    if (response === 200) {
      localStorage.setItem('username', username)
      props.data()
      navigate('/views')
    }

    if (response === 404) {
      localStorage.setItem('username', username)
      props.data()
      navigate('/new')
    }
  }

  return (
    <div className="my-44 md:my-20">
      <h1 className={styles.login__header}>To Do List.</h1>

      <div className="mx-auto md:w-72">
        <form onSubmit={handleLogin}>
          <label htmlFor="uname" className={styles.label__login}>
            <input
              type="text"
              id="uname"
              placeholder="Username"
              className={styles['form-label__input'] + ' peer'}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

          <button type="submit" className={styles.form__link + ' group'}>
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

            <span className={styles.log__span + ' group-hover:ms-4'}>
              Login
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
