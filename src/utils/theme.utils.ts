import { THEME_MOBILE_BREAKPOINT } from 'constants/theme.constants'

export const modalTheme = (theme: any) => ({
  '& .MuiDialog-container': {
    '& .MuiPaper-root': {
      margin: '16px',
      [theme.breakpoints.up(THEME_MOBILE_BREAKPOINT)]: {
        margin: '32px'
      }
    }
  }
})

export const tagSearchTheme = (theme: any) => ({
  width: '100%',
  [theme.breakpoints.up(THEME_MOBILE_BREAKPOINT)]: {
    width: 516
  }
})

export const headerTheme = (theme: any) => ({
  marginTop: '30px',
  fontWeight: theme.typography.fontWeightBold,
  fontSize: 48,
  [theme.breakpoints.up(THEME_MOBILE_BREAKPOINT)]: {
    fontSize: 72
  }
})

export const noteTheme = (theme: any) => ({
  width: '100%',
  '& .MuiCardHeader-root': {
    '& .MuiCardHeader-content': {
      '& .MuiTypography-root': {
        fontSize: 24
      }
    }
  },
  [theme.breakpoints.up(THEME_MOBILE_BREAKPOINT)]: {
    margin: '15px 0',
    maxWidth: 556,
    '& .MuiCardHeader-root': {
      '& .MuiCardHeader-content': {
        '& .MuiTypography-root': {
          fontSize: 30
        }
      }
    }
  }
})

export const homeTheme = (theme: any) => ({
  width: '100%',
  [theme.breakpoints.up(THEME_MOBILE_BREAKPOINT)]: {
    width: THEME_MOBILE_BREAKPOINT
  }
})
