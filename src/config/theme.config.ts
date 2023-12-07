import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(',')
  },
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '8px 16px'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '5px 16px'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '5px 16px'
        }
      }
    }
  }
})
