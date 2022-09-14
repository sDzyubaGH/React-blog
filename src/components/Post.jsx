import React from 'react'
import '../styles/Post.css'

export default function Post(props) {
  return (
    <div className='post'>
      <h2 className="post__title">1. JS</h2>
      <div className="post__content">
        <div>JS - ЯП</div>
      </div>
      <div className="post__btns"><button>Удалить</button></div>
    </div>
  )
}
