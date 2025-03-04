import React from 'react'
import { TodoContext } from '../../content'
import useLocalStorage from '../../hooks/useLocalStorage'
import Add from '../../components/Add'
import List from '../../components/List'
import Info from '../../components/Info'

import "./index.less"

const Main = () => {
  console.log('ToDo组件渲染');
  const [list, setList] = useLocalStorage('todo', [
    { id: '1', todo: 'item1', done: false },
    { id: '2', todo: 'item2', done: false }
  ])
  const { Provider } = TodoContext

  return (
    <Provider value={{ list, setList }}>
      <div className='todo'>
        <Add />
        <List >
          <Info />
        </List>
      </div>
    </Provider>
  )
}

export default Main
