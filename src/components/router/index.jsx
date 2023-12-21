import { BrowserRouter as Router, Route } from 'react-router-dom'

const RouterProvider = ({ routerInstruction }) => {
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
