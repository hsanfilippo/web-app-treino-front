import { GlobalStyle } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
])

function App() {
  return (
    <>
      <GlobalStyle />
        <Header />
        <RouterProvider router={routes} />
    </>

  );
}

export default App;
