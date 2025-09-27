import { useState } from 'react'
import TambahData from './pages/Tambahdata'
import TabelData from './pages/Tabeldata'
import Sidnav from './component/Sidnav'
import EditData from './pages/Editdata'
import Dashboard from './component/Dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Sidnav/>
   <div>
   <Routes>
      <Route path="/" element={<TambahData/>}/>
      <Route path="/k" element={<TabelData/>}/>
      <Route path="/r" element={<EditData/>}/>
      <Route path="/d" element={<Dashboard/>}/>
    </Routes>
   </div>
    </div>
  )
}

export default App