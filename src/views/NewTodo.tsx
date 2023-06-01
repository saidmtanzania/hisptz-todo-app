function NewTodo() {
  return (
    <div className="mt-16">
      <div className="mx-auto lg:w-96">
        <label
          htmlFor="UserEmail"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 mb-5"
        >
          <input
            type="text"
            id="UserEmail"
            placeholder="Title"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Title
          </span>
        </label>
        <label
          htmlFor="Description"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <textarea
            id="Description"
            placeholder="Description"
            className="peer h-16 w-full resize-none border-none bg-transparent p-1 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          ></textarea>

          <span className="absolute left-3 top-3 transform -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Description
          </span>
        </label>
        <a
          className="inline-block rounded-full border mt-3 border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          href="#"
        >
          <span className="sr-only"> Download </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            className="h-8 w-8 rtl:rotate-180"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default NewTodo
