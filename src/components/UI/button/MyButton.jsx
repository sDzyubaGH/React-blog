import React from 'react'
import cl from './MyButton.module.css'

export default function MyButton({children, className, ...props}) {
  return (
    <button {...props} className={[cl.myBtn, className].join(' ')}>
      {children}
    </button>
  )
}
