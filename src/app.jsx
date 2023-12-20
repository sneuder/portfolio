import GeneralContext from './context'
import useSetContext from './hooks/useSetContext'

import RouterProvider from './components/router'

import Home from './pages/home'
import Projects from './pages/projects'

function App() {
  const toolsContext = useSetContext()

  const routerInstruction = {
    home: {
      path: '/',
      component: () => {
        return <Home />
      }
    },
    projects: {
      path: '/projects',
      component: () => {
        return <Projects />
      }
    }
  }

  return (
    <GeneralContext.Provider value={toolsContext}>
      <RouterProvider routerInstruction={routerInstruction} />
    </GeneralContext.Provider>
  )
}

export default App
