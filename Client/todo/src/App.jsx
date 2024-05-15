import { Route, Routes,Link } from 'react-router-dom'
import './App.css'
import FetchData from './component/get'
import Adding from './component/add(post)'

function App() {

  return (
    <>
    <Link to='/add'>
    <button>ADD</button>
    </Link>
    <div>
      <Routes>
        <Route path='/' element={<FetchData/>}>
        </Route>
        <Route path='/add' element={<Adding/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
