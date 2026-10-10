import { useDispatch, useSelector } from "react-redux"
import { setActiveTabs } from "../redux/features/searchSlice"

const Tabs = () => {
    // Array containing all available tabs
    const tabs = ["photos", "videos"]
    const dispatch = useDispatch()

    // Get the currently active tab from Redux
    const activeTab = useSelector((state) => state.search.activeTabs)

    return (
        // Container for the tab buttons
        <div className="flex gap-5 p-10">
            {tabs.map(function (elem, idx) {
                return (
                    <button onClick={() => { dispatch(setActiveTabs(elem)) }}
                        className={`${(activeTab == elem ? "bg-blue-700" : "bg-gray-500")} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
                        key={idx}>
                        {elem}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs