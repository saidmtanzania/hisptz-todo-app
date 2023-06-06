/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react'
import {
  getTodo,
  getTodoById,
  CardData,
  updateTodo,
} from '../Components/Api/ApiClient'
import Card from '../Components/Post/PostCard'
import Pagination from '../Components/Post/Pagination/Pagination'
import SearchBar from '../Components/Bar/SearchBar/SearchBar'
import styles from './CardLayout.module.css'
import Modal from '../Components/Post/Modal/Modal'

function CardLayout() {
  const [isOpen, setIsOpen] = useState(false)
  const [cardData, setCardData] = useState<CardData[]>([])
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null)
  const value = localStorage.getItem('username')

  const handleOpenModal = (card: CardData) => {
    setSelectedCard(card)
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
    setSelectedCard(null)
  }

  const handleUpdate = async (
    title: string,
    description: string,
    lastUpdated: string
  ) => {
    const updatedCardData = {
      ...selectedCard,
      value: { ...selectedCard.value, title, description, lastUpdated },
    }

    const data = {
      id: updatedCardData.value.id,
      completed: updatedCardData.value.completed,
      description: updatedCardData.value.description,
      title: updatedCardData.value.title,
      created: updatedCardData.value.created,
      lastUpdated: updatedCardData.value.lastUpdated,
    }
    const response = await updateTodo(data.id, value, data)
    if (response != 200) return
    setSelectedCard(null)
    handleCloseModal()
    await fetchData()
  }

  const makeState = async (data: any) => {
    const response = await updateTodo(data.id, value, data)
    if (response != 200) return
    setSelectedCard(null)
    await fetchData()
    console.log(response)
  }

  const searchBy = async (id: any) => {
    if (id === '') {
      await fetchData()
    } else {
      const formattedData: any = await getTodoById(id, value)
      if (formattedData !== null) {
        setCardData(formattedData)
      } else {
        await fetchData()
      }
    }
  }

  const fetchData = async () => {
    const todoData: any = await getTodo(value, '.')
    setCardData(todoData)
  }

  const updateStatus = async (status: any) => {
    if (status === 200) {
      await fetchData()
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <React.Fragment>
        <div className={styles.SearchLay}>
          <SearchBar searchBy={searchBy} />
        </div>

        <div className={styles.CardLay}>
          {cardData.map((card) => (
            <Card
              key={card.key}
              id={card.key}
              isCompleted={card.value.completed}
              title={card.value.title}
              description={card.value.description}
              created={card.value.created}
              lastUpdated={card.value.lastUpdated}
              handleUpdate={updateStatus}
              handleOpenModal={() => handleOpenModal(card)}
              handleStatus={makeState}
            />
          ))}
        </div>
        <Pagination />
        {selectedCard && (
          <Modal
            isOpen={isOpen}
            onClose={handleCloseModal}
            onUpdate={handleUpdate}
            title={selectedCard.value.title}
            description={selectedCard.value.description}
          />
        )}
      </React.Fragment>
    </>
  )
}

export default CardLayout
