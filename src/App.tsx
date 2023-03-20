import Main from './pages/Main'
import './styles/global.scss'
import {Routes, Route} from 'react-router-dom'
import {routes} from './router/router'

function App() {
  return (
    <>
      <Routes>
        {
          routes.map(({path, element}) => <Route path={path} element={element} key={path}/>)
        }
      </Routes>
    </>
  )
}

export default App
