import { ReactElement } from 'react'
import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core'

const palette: MantineColorsTuple = [
  '#f1f4fe',
  '#e4e6ed',
  '#c8cad3',
  '#a9adb9',
  '#9094a3',
  '#7f8496',
  '#777c91',
  '#63687c',
  '#595e72',
  '#4a5167',
]

const theme = createTheme({
  colors: {
    palette,
  },
})

function ThemeProvider({ children }: { children: ReactElement }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}

export { ThemeProvider }
