import GeneralContext from './context'
import useSetContext from './hooks/useSetContext'

import RouterProvider from './components/router'
import { Suspense } from 'react'
function App() {
  const toolsContext = useSetContext()

  return (
    <GeneralContext.Provider value={toolsContext}>
      <Suspense fallback={<div>Loading</div>}>
        <RouterProvider />
      </Suspense>
    </GeneralContext.Provider>
  )
}

export default App
