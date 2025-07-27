import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Timeline from './pages/Timeline.jsx'
import Publications from './pages/Publications.jsx'
import FundingAndAwards from './pages/FundingAndAwards.jsx'

function App() {
  return (
    <BrowserRouter basename="/aditisinghs.github.io">
<nav className="fixed top-0 left-0 right-0 flex justify-end gap-6 py-6 px-4 bg-blue-50 shadow z-50">
        <Link to="/"   className="text-black font-medium text-lg px-4 py-1 border border-black rounded hover:bg-gray-200 transition-colors"
>Home</Link>
        <Link to="/timeline"   className="text-black font-medium text-lg px-4 py-1 border border-black rounded hover:bg-gray-200 transition-colors"
>A Mildly Chaotic Progression</Link>
        <Link to="/publications"   className="text-black font-medium text-lg px-4 py-1 border border-black rounded hover:bg-gray-200 transition-colors"
>Publications</Link>
        <Link to="/funding"   className="text-black font-medium text-lg px-4 py-1 border border-black rounded hover:bg-gray-200 transition-colors"
>Awards and Scholarships</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/funding" element={<FundingAndAwards />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
