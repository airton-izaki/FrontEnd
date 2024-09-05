import { useState } from 'react'
import FirstComponents from './componets/FirstComponents'
import SecondComponents from './componets/SecondComponents'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponents />
      <SecondComponents  />
     <p>Meu primeiro componente</p>
    </>
  )
}

export default App
