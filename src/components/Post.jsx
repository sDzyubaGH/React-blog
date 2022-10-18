import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Post.css'
import MyButton from './UI/button/MyButton'

export default function Post({ post, remove }) {
  const navigate = useNavigate()
  return (
    <div className='post' onClick={() => navigate(`/posts/${post.id}`)}>
      <h2 className="post__title"><span style={{'fontSize': '1em'}}>{post.id}</span>. {post.title}</h2>
      <div className="post__content">
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Подробнее</MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  )
}
