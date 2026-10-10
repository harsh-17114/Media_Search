import { useDispatch } from "react-redux"
import { addCollection, addedToast } from "../redux/features/collectionSlice"

const ResultCard = ({ item }) => {
    const dispatch = useDispatch()

    // Add item to collection
    const addToCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
    }

    return (
        // Main card container
        <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden">
            <a target="_blank" className="h-full" href={item.url}>

                {/* Displays photo */}
                {item.type == "photo" ? <img className="h-full w-full object-cover object-center" src={item.src} alt="{item.title || Media image}" /> : ""}

                {/* Displays video */}
                {item.type == "video" ? <video className="h-full w-full object-cover object-center" autoPlay loop muted src={item.src}></video> : ""}
            </a>

            {/* Bottom section of card */}
            <div id="bottom" className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white">

                {/* Displays media title */}
                <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">{item.title}</h2>
                <button onClick={() => { addToCollection(item) }}
                    className="bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium">
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard