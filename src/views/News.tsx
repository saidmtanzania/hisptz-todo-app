function News() {
  return (
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
        className="inline-block rounded border border-current px-8 py-3 mt-5 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
        href="/download"
      >
        Add
      </a>
    </div>
  )
}

export default News
