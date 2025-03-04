import { View, Text } from '@hyext/hy-ui'
import React, { Component } from 'react'

import Examlpe from './common.js'
import './app.hycss'

class App extends Component {
  render() {
    return (
      <View className="container">
        <Examlpe />
        {/* <Text>虎牙小程d序</Text> */}
      </View>
    )
  }
}

export default App
