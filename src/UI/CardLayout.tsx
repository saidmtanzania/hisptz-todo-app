import Card from '../Components/Post/PostCard'
import Pagination from '../Components/Post/Pagination/Pagination'
import SearchBar from '../Components/Bar/SearchBar/SearchBar'

function CardLayout() {
  const completed = true
  return (
    <>
      <div className="mt-10 mb-5 lg:w-72 mx-auto">
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
