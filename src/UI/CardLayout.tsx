import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Components/Post/PostCard'
import Pagination from '../Components/Post/Pagination/Pagination'
import SearchBar from '../Components/Bar/SearchBar/SearchBar'
import styles from './CardLayout.module.css'
import Modal from '../Components/Post/status/Modal'

interface CardData {
  key: string
  value: {
    id: number
    title: string
    description: string
    completed: boolean
    created: string
    lastUpdated: any
  }
}

function CardLayout() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleTitleChange = (value: any) => {
    setTitle(value)
  }

  const handleDescriptionChange = (value: any) => {
    setDescription(value)
  }

  const handleUpdate = () => {
    console.log('Updating:', title, description)
    handleCloseModal()
  }
  const [cardData, setCardData] = useState<CardData[]>([])
  const value = localStorage.getItem('username')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await axios.get<CardData[]>(
          `/dataStore/${value}?fields=.`
        )
        setCardData(response.data.entries as CardData[])
      } catch (error) {
        // console.error('Error fetching card data:', error)
      }
    }

    fetchData()
  }, [value])

  const SearchBy = async (id: any) => {
    if (id === '') {
      try {
        const response: any = await axios.get<CardData[]>(
          `/dataStore/${value}?fields=.`
        )
        setCardData(response.data.entries as CardData[])
      } catch (error) {
        console.error('Error fetching card data:', error)
      }
    }
    axios
      .get(`/dataStore/${value}/${id}`)
      .then((response: any) => {
        const searchData = response.data
        if (searchData) {
          const formattedData: CardData[] = [
            {
              key: searchData.id.toString(),
              value: {
                id: searchData.id,
                title: searchData.title,
                description: searchData.description,
                completed: searchData.completed,
                created: searchData.created,
                lastUpdated: searchData.lastUpdated,
              },
            },
          ]
          setCardData(formattedData)
        } else {
          setCardData([])
        }
      })
      .catch((error) => {
        console.error('Error fetching card data:', error)
      })
  }

  return (
    <>
      <div className={styles.SearchLay}>
        <SearchBar searchBy={SearchBy} />
      </div>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          onTitleChange={handleTitleChange}
          onDescriptionChange={handleDescriptionChange}
          onUpdate={handleUpdate}
        />
      ) : (
        <>
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
                handleOpenModal={handleOpenModal}
              />
            ))}
          </div>
          <Pagination />
        </>
      )}
    </>
  )
}

export default CardLayout
