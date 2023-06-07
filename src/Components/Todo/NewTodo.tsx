import { useState } from 'react'
import styles from './NewTodo.module.css'
import { useNavigate } from 'react-router-dom'
import { postTodo } from '../Api/ApiClient'

function NewTodo(props: any) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()
  const value = sessionStorage.getItem('username')
  props.data()

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()

    const todo = {
      id: Math.floor(Math.random() * 1000),
      title,
      description,
      completed: false,
      created: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
    }

    const response = await postTodo(todo.id, value, todo)
    if (response === 201) {
      navigate('/views')
    }
  }

  return (
    <div className={styles.main__lay}>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title" className={styles.label__title}>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className={styles.title__input + ' peer'}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
        <button type="submit" className={styles.a__link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            className="h-8 w-8 rtl:rotate-180"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
        </button>
      </form>
    </div>
  )
}
export default NewTodo
