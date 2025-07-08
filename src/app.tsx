import { DatesProvider } from '@mantine/dates'

import { RouterProvider, ThemeProvider } from '@/providers'

function App() {
  return (
    <>
      <ThemeProvider>
        <DatesProvider settings={{ consistentWeeks: true }}>
          <RouterProvider />
        </DatesProvider>
      </ThemeProvider>
    </>
  )
}

export default App
