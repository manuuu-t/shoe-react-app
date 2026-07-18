import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddShoe from './components/AddShoe'
import Search from './components/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddShoe />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App