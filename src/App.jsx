import React from 'react'
import AOS from 'aos'
import Routes from './Config/routes'
import './App.css'
import 'antd/dist/antd.css'
import 'aos/dist/aos.css'

AOS.init()

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default App