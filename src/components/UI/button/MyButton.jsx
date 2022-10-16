import React from 'react'
import cl from './MyButton.module.css'

export default function MyButton({children, className, ...props}) {
  console.log(className)
  return (
    <button {...props} className={[cl.myBtn, className].join(' ')}>
      {children}
    </button>
  )
}
