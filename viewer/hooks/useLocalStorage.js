import { useEffect, useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [list, setList] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key) //获取本地存储的值
      return localValue ? JSON.parse(localValue) : initialValue //如果有值就解析，没有就返回初始值
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(list)) //存储到本地
  }, [key, list])

  return [list, setList]
}

export default useLocalStorage