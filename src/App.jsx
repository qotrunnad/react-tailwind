import { useState } from 'react'
import TambahData from './pages/Tambahdata'
import TabelData from './pages/Tabeldata'
import Sidnav from './component/Sidnav'
import EditData from './pages/Editdata'
import Dashboard from './component/Dashboard'
import Tambahan from './component/Tambahan'
import Profil from './component/Profil'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    < div className='flex' >
      <Sidnav/>
   <div className='flex-1 ml-62 p-6'>
   <Routes>
      <Route path="/i" element={<TambahData/>}/>
      <Route path="/k" element={<TabelData/>}/>
      <Route path="/r" element={<EditData/>}/>
      <Route path="/d" element={<Dashboard/>}/>
      <Route path="/e" element={<Tambahan/>}/>
      <Route path="/o" element= {<Profil/>}/>
    </Routes>
   </div>
    </div>
  )
}

export default App