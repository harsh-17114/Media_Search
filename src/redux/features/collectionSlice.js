import { createSlice } from "@reduxjs/toolkit"
import { toast, Zoom } from "react-toastify"

// Initial state of the collection
const initialState = {
    items: JSON.parse(localStorage.getItem("collection")) || []
}

const collectionSlice = createSlice({
    name: "collection", // Name of this Redux slice
    initialState,

    // Reducers contain the functions that modify the state
    reducers: {
        // Add item to Collection
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem("collection", JSON.stringify(state.items))
            }
        },

        // Remove item from collection
        removeCollection: (state, action) => {

            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem("collection", JSON.stringify(state.items))
        },

        // Clear collection
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem("collection")
        },

        // Add Toast
        addedToast: () => {
            toast.success("Added to Collection ✅", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            })
        },

        // Remmove Toast
        removeToast: () => {
            toast.error("Removed from Collection", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            })
        }
    }
})

// Export the actions
export const { addCollection, removeCollection, clearCollection, addedToast, removeToast } = collectionSlice.actions
export default collectionSlice.reducer