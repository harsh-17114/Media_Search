import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify"

const App = () => {

  return (
    // Main container for the entire application
    <div className="min-h-screen text-white w-full bg-gray-950">
      <Navbar />

      {/* Routes decide which page should be displayed */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      {/* ToastContainer is responsible for displaying notifications */}
      <ToastContainer />
    </div>
  )
}

export default App