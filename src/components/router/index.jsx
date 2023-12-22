import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const routerInstruction = {
  home: {
    path: '/',
    component: React.lazy(() => import('../../pages/home'))
  },
  projects: {
    path: '/projects',
    component: React.lazy(() => import('../../pages/projects'))
  }
}

const RouterProvider = () => {
  return (
    <Router>
      <Route
        exact
        path={routerInstruction.home.path}
        component={routerInstruction.home.component}
      />
      <Route
        exact
        path={routerInstruction.projects.path}
        component={routerInstruction.projects.component}
      />
    </Router>
  )
}

export default RouterProvider
