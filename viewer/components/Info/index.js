import React, { useContext } from 'react'
import { Dialog } from '@hyext/hy-ui'
import { TodoContext } from '../../content'
import "./index.less"

const Info = React.memo(() => {
  console.log('ToDo-List-Info组件渲染');
  const { list, setList } = useContext(TodoContext)
  let tatalCount = list.length //总数
  let count = list.filter(item => item.done === true).length //已完成数
  const dialogRef = React.useRef(null)

  //全选与全不选
  const handleCheckAll = (flag) => {
    const newList = list.map(item => ({ ...item, done: flag }))
    setList(newList)
  }

  //删除已完成
  const handleDelete = () => {
    const newList = list.filter(item => item.done === false)
    setList(newList)
  }



  return (
    <div className='info'>
      <div>
        <label>
          <input type="checkbox" checked={count === tatalCount && tatalCount !== 0} onChange={(event) => handleCheckAll(event.target.checked)} />

          <span style={{ userSelect: 'none' }}>已完成{count}/全部{tatalCount}</span>
        </label>
      </div>

      <button className=' btn btn-danger' onClick={() => dialogRef.current.open()} >清空已完成</button>

      <Dialog
        ref={dialogRef}
        title='系统提示'
        bodyText='确认删除所有选中的任务？'
        cancelable={true}
        cancelCallback={() => {
          // console.log('cancel')
        }}
        confirmCallback={() => {
          // console.log('confirm')
          handleDelete()
        }}
      />
    </div>
  )
})

export default Info
