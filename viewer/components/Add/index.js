import React, { useContext, useId } from 'react'
import { TodoContext } from '../../content'

import "./index.less"


const Add = React.memo(() => {
  console.log('ToDo-Add组件渲染');
  const { list, setList } = useContext(TodoContext)

  //新增
  const handleKeyUp = (event) => {
    const { keyCode, target: { value } } = event;
    if (keyCode !== 13) return //回车键
    const todo = value || ''
    if (todo.trim() === '') return  //输入为空
    setList([...list, { id: Date.now(), todo, done: false }])
    event.target.value = ''
  }


  return (
    <div className='add'>
      <input className='addtext' type='text' placeholder="请输入你的任务名称，按回车键确认!" onKeyUp={handleKeyUp} />
    </div>
  )
})

export default Add
