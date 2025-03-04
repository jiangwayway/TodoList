import React, { useRef, useState, useContext } from 'react'
import { Dialog } from '@hyext/hy-ui'
import { TodoContext } from '../../content'
import './index.less'

const Item = React.memo((props) => {
  const { list, setList } = useContext(TodoContext)
  const [mouse, setMouse] = useState(false)
  const { id, todo, done } = props.todoObj

  console.log('ToDo-List-Item组件渲染', todo);

  const checkboxRef = useRef(null)
  const dialogRef = useRef(null)

  //修改选中状态
  const handleChange = (event) => {
    const done = event.target.checked
    const newList = list.map(item => item.id === id ? { ...item, done } : item)
    setList(newList)
  }

  //删除
  const handleDelete = () => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <li className='item' style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
      <label>
        <input ref={checkboxRef} type='checkbox' checked={done} onChange={handleChange} />
        <span style={{ userSelect: 'none' }}>{todo}</span>
      </label>
      <button className='btn btn-danger' style={{ display: mouse ? 'block' : 'none' }} onClick={() => dialogRef.current.open()} >删除</button>
      <Dialog
        ref={dialogRef}
        title='系统提示'
        bodyText='确认删除该任务？'
        cancelable={true}
        cancelCallback={() => {
          // console.log('cancel')
        }}
        confirmCallback={() => {
          // console.log('confirm')
          handleDelete()
        }}
      />
    </li>
  )
})

export default Item
