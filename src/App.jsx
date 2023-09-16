import React from 'react'
import { Navbar, Section1, Section2, Section3 } from "./components/index"
import './util/style/index.scss';
const App = () => {
  return (
    <div >
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default App