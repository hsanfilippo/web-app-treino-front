import { GlobalStyle } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import LoginRegister from './pages/LoginRegister'
import Home from './pages/Home'
import Treinos from './pages/Treinos'
import NewTreino from './pages/NewTreino'
import EditTreino from './pages/EditTreino'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LoginRegister />
  },
  {
    path: 'home/',
    element: <Home />
  },
  {
    path: 'treinos/',
    element: <Treinos />
  },
  {
    path: 'treinos/new/',
    element: <NewTreino />
  },
  {
    path: 'treinos/:id/edit/',
    element: <EditTreino />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
