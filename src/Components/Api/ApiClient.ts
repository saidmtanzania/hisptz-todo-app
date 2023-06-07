import axios from 'axios'

export interface CardData {
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

export const getTodo = async (
  value: any,
  filters: any,
  page: any,
  pageSize: any
) => {
  try {
    const response: any = await axios.get<CardData[]>(
      `/dataStore/${value}?fields=${
        filters || '.'
      }&page=${page}&pageSize=${pageSize}`
    )
    return response.data.entries as CardData[]
  } catch (error: any) {
    return error.response.status
  }
}

export const getTodoById = async (id: any, value: any) => {
  try {
    const searchData = await axios.get(`/dataStore/${value}/${id}`)

    const formattedData: CardData[] = [
      {
        key: searchData.data.id.toString(),
        value: {
          id: searchData.data.id,
          title: searchData.data.title,
          description: searchData.data.description,
          completed: searchData.data.completed,
          created: searchData.data.created,
          lastUpdated: searchData.data.lastUpdated,
        },
      },
    ]
    return formattedData
  } catch (error: any) {
    if (error.response.status === 404) {
      return null
    }
  }
}

export const postTodo = async (id: any, value: any, todo: any) => {
  try {
    const response = await axios.post(`/dataStore/${value}/${id}`, todo)
    return response.data.httpStatusCode
  } catch (error: any) {
    console.log(error)
  }
}

export const updateTodo = async (id: any, value: any, todo: any) => {
  try {
    const response = await axios.put(`/dataStore/${value}/${id}`, todo)
    return response.status
  } catch (error: any) {
    console.log(error)
  }
}

export const deleteTodo = async (id: any, value: any) => {
  try {
    const response = await axios.delete(`/dataStore/${value}/${id}`)
    return response.status
  } catch (error: any) {
    console.log(error)
  }
}

export const simpleLogin = async (username: any) => {
  try {
    const response = await axios.get(`/dataStore/${username}`)
    return response.status
  } catch (error: any) {
    return error.response.status
  }
}
