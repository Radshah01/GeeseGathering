import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pomodoro from './pages/Pomodoro'
import Sessions from './pages/Sessions'
import Friends from './pages/Friends'
import NoPage from './pages/NoPage'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/pomodoro" element={<Pomodoro/>}/>
          <Route path="/sessions" element={<Sessions/>}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
