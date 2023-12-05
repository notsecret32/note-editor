import { routes } from 'pages/routes'
import { RouterProvider } from 'react-router-dom'

export const App: React.FC = () => {
  return <RouterProvider router={routes} />
}
