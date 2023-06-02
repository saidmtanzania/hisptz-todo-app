import Card from './components/Card'
import Pagination from './components/Pagination'
import SearchBar from './components/SearchBar'

function CardLayout() {
  const completed = true
  return (
    <>
      <div className="mt-16 mb-5 lg:w-72 mx-auto">
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 ">
        <Card isCompleted={!completed} />
        <Card isCompleted={completed} />
        <Card isCompleted={!completed} />
      </div>
      <Pagination />
    </>
  )
}

export default CardLayout
