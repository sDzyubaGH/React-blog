import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import cl from './MyModal.module.css'

export default function MyModal({ children, visible, setVisible }) {
  const rootClasses = [cl.myModal]

  const ref = useRef()

  useEffect(() => {
    ref.current.focus()
  }, [visible])

  if (visible) {
    rootClasses.push(cl.active)
  }

  function keyCheck(e) {
    if (e.key === 'Escape') {
      setVisible(false)
    }
  }

  return (
    <div
      ref={ref}
      onKeyDown={keyCheck}
      onClick={() => setVisible(false)}
      className={rootClasses.join(' ')}
      tabIndex='0'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cl.myModalContent}
      >
        {children}
      </div>
    </div>
  )
}
