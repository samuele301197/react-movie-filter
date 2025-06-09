import { useState } from 'react'
import FilmList from './assets/components/FilmList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FilmList />
    </>
  )
}

export default App
