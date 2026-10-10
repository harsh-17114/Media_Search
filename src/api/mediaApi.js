import axios from "axios"

// Get API keys
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY

// Fetches photos from Unsplash
export async function fetchPhotos(query, page = 1, per_page = 12) {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
        params: { query, page, per_page },
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
    })
    return res.data
}

// Fetches videos from Pexels
export async function fetchVideos(query, per_page = 12) {
    const res = await axios.get("https://api.pexels.com/v1/videos/search", {
        params: { query, per_page },
        headers: { Authorization: PEXELS_KEY }
    })
    return res.data
}