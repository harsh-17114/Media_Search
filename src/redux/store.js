import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./features/searchSlice.js"
import collectionReducer from "./features/collectionSlice.js"

// Create the Redux store
export const store = configureStore({
    // Combine all reducers into one Redux store
    reducer: {
        search: searchReducer, // It is managed by searchReducer
        collection: collectionReducer // It is managed by collectionReducer
    }
})