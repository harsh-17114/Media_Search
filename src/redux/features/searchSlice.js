import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "search", // Name of this Redux slice
    initialState: {
        query: "",
        activeTabs: "photos",
        result: [],
        loading: false,
        error: null
    },

    // Reducers contain the functions that modify the state
    reducers: {

        // Set search query
        setQuery(state, action) {
            state.query = action.payload
        },

        // Set active tab
        setActiveTabs(state, action) {
            state.activeTabs = action.payload
        },

        // Set results
        setResults(state, action) {
            state.loading = false
            state.result = action.payload
        },

        // Set laoding
        setLoading(state) {
            state.loading = true
            state.error = null
        },

        // Set error
        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },

        // Clear results
        clearResults(state) {
            state.result = []
        }
    }
})

// Export the actions
export const { setQuery, setActiveTabs, setResults, setLoading, setError, clearResults } = searchSlice.actions
export default searchSlice.reducer