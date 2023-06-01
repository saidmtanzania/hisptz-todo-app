import Card from './components/Card'

function CardLayout() {
  const completed = true
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-16">
      <Card isCompleted={completed} />
      <Card isCompleted={!completed} />
      <Card isCompleted={completed} />
      <Card isCompleted={!completed} />
    </div>
  )
}

export default CardLayout
