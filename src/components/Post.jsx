import React from 'react'
import '../styles/Post.css'
import MyButton from './UI/button/MyButton'

export default function Post({ post, remove }) {
  return (
    <div className='post'>
      <h2 className="post__title">{post.title}</h2>
      <div className="post__content">
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}
