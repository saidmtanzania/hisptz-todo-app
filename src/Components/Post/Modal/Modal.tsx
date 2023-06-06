import { useState } from 'react'
import styles from './Modal.module.css'

function Modal(props: any) {
  const [title, setTitle] = useState(props.title)
  const [description, setDescription] = useState(props.description)

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const lastUpdated = new Date().toISOString()
    const status = 0
    props.onUpdate(title, description, lastUpdated, status)
  }

  if (!props.isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 w-96">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className={styles.label__title}>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className={styles.title__input + ' peer'}
              value={title}
              onChange={handleTitleChange}
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
              onChange={handleDescriptionChange}
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
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Save
            </button>
            <button
              className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              type="button"
              onClick={props.onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
