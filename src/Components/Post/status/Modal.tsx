import React from 'react'
import styles from './modal.module.css'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onTitleChange: (value: string) => void
  onDescriptionChange: (value: string) => void
  onUpdate: () => void
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onTitleChange,
  onDescriptionChange,
  onUpdate,
}) => {
  const handleTitleChange = (e: any) => {
    onTitleChange(e.target.value)
  }

  const handleDescriptionChange = (e: any) => {
    onDescriptionChange(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onUpdate()
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 flex place-items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className={styles.label__title}>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className={styles.title__input + ' peer'}
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
              onClick={onClose}
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
