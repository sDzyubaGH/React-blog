import React from 'react'
import { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

export default function PostForm({ create }) {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      ...post,
      id: Date.now()
    }

    create(newPost)

    setPost({
      title: '',
      body: ''
    })
  }

  return (
    <form className="postForm" action="">
      <div className="postForm__inputs">
        <MyInput value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} placeholder={'Название поста'} />
        <MyInput value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} placeholder={'Описание поста'} />
      </div>
      <div className="postForm__btns">
        <MyButton onClick={addNewPost}>Создать</MyButton>
      </div>
    </form>
  )
}
