import React from 'react'
import logo from '../../assets/icon_empty.png'
import "./index.less"
const Header = () => {
  console.log('Head组件渲染');
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='title'>
        <p style={{ userSelect: 'none' }}>Todo List</p>
      </div>

    </div>

  )
}

export default Header
