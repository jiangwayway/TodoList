import { View, Text } from '@hyext/hy-ui'
import React, { Component } from 'react'
import Header from './pages/Header'
import Main from './pages/Main'
import Footer from './pages/Footer'

import Examlpe from './common'
import './app.less'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />


        {/* <Examlpe /> */}
      </div>
    )
  }
}

export default App
