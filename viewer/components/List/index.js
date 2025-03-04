import React, { useContext } from 'react'
import Item from '../Item'
import { TodoContext } from '../../content'
import "./index.less"
const List = React.memo((props) => {
  console.log('ToDo-List组件渲染');
  const { list } = useContext(TodoContext)
  return (
    <div className='list'>
      <ul className='list-ul todo-main'>
        {list.map(todoObj => {
          return <Item key={todoObj.id} todoObj={todoObj} />
        })}
      </ul>

      {list.length === 0 ? <div style={{ paddingTop: '5%' }}>暂无任务</div> : props.children}
    </div>
  )
})

export default List
