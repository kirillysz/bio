import "./App.css"

import Header from '../Header/Header'
import Person from "../Person/Person"
import About from "../About/About"

export default function App() {
  return (
    <div className="main">
        <Header />
        <Person />
        <About />
    </div>
  )
}

