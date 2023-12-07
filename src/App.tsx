import { ThemeProvider } from '@mui/material'
import { theme } from 'config/theme.config'
import { routes } from 'pages/routes'
import { RouterProvider } from 'react-router-dom'
import './App.css'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}
