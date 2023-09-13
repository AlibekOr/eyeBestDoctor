import React from 'react'
import { Navbar, Section1, Section2 } from "./components/index"
import './util/style/index.scss';
const App = () => {
  return (
    <div >
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App