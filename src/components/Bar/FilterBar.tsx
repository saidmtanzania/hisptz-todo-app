function FilterBar() {
  return (
    <div className="flex mt-3 ml-5 lg:ml-auto">
      <div className="flex items-center mr-4">
        <input
          id="red-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 focus:ring-red-300 "
        />
        <label
          htmlFor="red-checkbox"
          className="ml-2 text-sm font-medium text-gray-500 "
        >
          Title
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          id="green-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 "
        />
        <label
          htmlFor="green-checkbox"
          className="ml-2 text-sm font-medium text-gray-500 "
        >
          Completed
        </label>
      </div>
      <div className="flex items-center mr-4">
        <input
          id="teal-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 "
        />
        <label
          htmlFor="teal-checkbox"
          className="ml-2 text-sm font-medium text-gray-500"
        >
          Description
        </label>
      </div>
    </div>
  )
}

export default FilterBar
