import { GlobalStyle } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Treinos from './pages/Treinos'
import NewTreino from './pages/NewTreino'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'treinos/',
    element: <Treinos />
  },
  {
    path: 'treinos/new/',
    element: <NewTreino />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
