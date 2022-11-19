import { createContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeProviderWrapper = (props) => {
  const [theme, setTheme] = useState('dark')

  const toogleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProviderWrapper }
