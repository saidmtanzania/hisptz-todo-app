/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState, useCallback } from 'react'
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

function CardLayout(props: any) {
  const [isOpen, setIsOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [cardData, setCardData] = useState<CardData[]>([])
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null)
  const value = sessionStorage.getItem('username')
  props.data()

  const handleOpenModal = useCallback((card: CardData) => {
    setSelectedCard(card)
    setIsOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
    setSelectedCard(null)
  }, [])

  const fetchData = useCallback(async () => {
    const todoData: any = await getTodo(value, '.', page, 3)
    setCardData(todoData)
  }, [value, page])

  const handleUpdate = useCallback(
    async (title: string, description: string, lastUpdated: string) => {
      const completed = false
      const updatedCardData = {
        ...selectedCard,
        value: {
          ...selectedCard.value,
          title,
          description,
          lastUpdated,
          completed,
        },
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
      if (response !== 200) return

      setSelectedCard(null)
      handleCloseModal()
      fetchData()
    },
    [selectedCard, value, handleCloseModal, fetchData]
  )

  const makeState = useCallback(
    async (data: any) => {
      const response = await updateTodo(data.id, value, data)
      if (response !== 200) return

      setSelectedCard(null)
      fetchData()
    },
    [value, fetchData]
  )

  const searchBy = useCallback(
    async (id: any) => {
      if (id === '') {
        fetchData()
      } else {
        const formattedData: any = await getTodoById(id, value)
        if (formattedData !== null) {
          setCardData(formattedData)
        } else {
          fetchData()
        }
      }
    },
    [value, fetchData]
  )

  const updateStatus = useCallback(
    async (status: any) => {
      if (status === 200) {
        fetchData()
      }
    },
    [fetchData]
  )

  const handlePageChange = useCallback((event: any) => {
    const newPageNumber = parseInt(event.target.value, 10)
    setPage(newPageNumber)
  }, [])

  const goToPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage((prevPageNumber) => prevPageNumber - 1)
    }
  }, [page])

  const goToNextPage = useCallback(() => {
    setPage((prevPageNumber) => prevPageNumber + 1)
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
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
      <Pagination
        handlePageChange={handlePageChange}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        page={page}
      />
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
  )
}

export default CardLayout
