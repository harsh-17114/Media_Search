import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"

const SearchBar = () => {
  // Local state to store the text entered in the search box
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  // Handles form submission and updates the search query in Redux
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

  return (
    // Main wrapper for the search bar
    <div>
      <form onSubmit={(e) => { submitHandler(e) }}
        className="flex  bg-(--c1) gap-5 py-10 px-10">

        {/* Controlled input whose value is managed by React state */}
        <input onChange={(e) => { setText(e.target.value) }}
          className="w-full border-2 px-6 py-3 text-xl rounded outline-none"
          required type="text" placeholder="Search Anything" value={text} />
        <button className="active:scale-95 cursor-pointer border-2 px-6 py-3 text-xl rounded outline-none">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar