import { useEffect } from "react"
import { fetchPhotos, fetchVideos } from "../api/mediaApi"
import { setLoading, setError, setResults } from "../redux/features/searchSlice"
import { useDispatch, useSelector } from "react-redux"
import ResultCard from "./ResultCard"

const ResultGrid = () => {
    const dispatch = useDispatch()

    // Gets search query, active tab, results, loading, and error from Redux
    const { query, activeTabs, result, loading, error } = useSelector((store) => store.search)

    // Runs the API request whenever the query or active tab changes
    useEffect(function () {
        if (!query) {
            return
        }

        // Defines an asynchronous function to fetch and process media data
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []

                // For photos
                if (activeTabs == "photos") {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: "photo",
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html
                    }))
                }

                // For videos
                if (activeTabs == "videos") {
                    let response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: "video",
                        title: item.user.name || "video",
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url
                    }))
                }
                dispatch(setResults(data))
            }
            catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData()
    }, [query, activeTabs, dispatch])

    // Checks whether an error occurred during the API request
    if (error) {
        return <h1>Error</h1>
    }

    // Checks whether the API request is currently loading
    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        // Returns the grid containing all search results
        <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-10">
            {result.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
        </div>
    )
}

export default ResultGrid