import { useSelector } from "react-redux"
import ResultGrid from "../components/ResultGrid"
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs"

const HomePage = () => {
    // Get the "query" value from the search slice of Redux
    const { query } = useSelector((store) => store.search)

    return (
        <div>

            {/* Search input where the user enters a search query */}
            <SearchBar />
            {query != "" ? <div><Tabs /><ResultGrid /></div> : ""}
        </div>
    )
}

export default HomePage