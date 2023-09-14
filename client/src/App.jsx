import { useState } from 'react'
import './App.css'
import Count from './components/Count'
import Random from './components/Random'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count />
      <Random /> */}
      <Product/>
    </>
  )
}

export default App
