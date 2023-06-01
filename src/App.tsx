import NewTodo from './views/NewTodo'
import Button from './components/Button'
import './App.css'
function App() {
  return (
    <main className="container px-8 py-6">
      <div className="flex items-center justify-center mb-3 fixed top-2 left-0 w-full">
        <Button />
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-16">
        <Card isCompleted={Completed} />
        <Card isCompleted={!Completed} />
        <Card isCompleted={Completed} />
      </div>
      <div className="flex items-center justify-center mb-3 fixed bottom-0 left-0 w-full">
        <Pagination />
      </div> */}
      <div className="mt-16">
        <NewTodo />
      </div>
      {/* <Badges /> */}
    </main>
  )
}

export default App
