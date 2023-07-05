import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import './App.css'
import About from './components/About'
import Notfound from './components/Notfound'
import Registro from './components/Registro'
function App() {
  const [producto] = useState("🍕") 

  return (
    <> 
      <ul>
        <li><a href='/registrar'>Registrar</a></li>
        <li><a href='/about'>Acerca</a></li>
        <li><a href='/'>home</a></li>
      </ul>
      <Routes>
      <Route
         path='/'
         element={<>
            <h1>Index</h1>
         </>}>
      </Route>
        <Route
         path='/about'
         element={ producto ? <About prod={producto}></About>:<h1>No existe el producto</h1>}>
        </Route>

        <Route
         path='/productos/:productoId'
         element={ producto ? <About prod={producto}></About>:<h1>No existe el producto</h1>}>
        </Route>

        <Route
         path='/registrar'
         element={<Registro></Registro>}>
        </Route>


        <Route
         path='*'
         element={<><h1>404:NOT FOUND</h1><Notfound></Notfound></>}>
        </Route>
  
      </Routes> 
    </>
  )
}

export default App
