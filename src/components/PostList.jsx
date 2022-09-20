import React from 'react'
import NoPosts from './NoPosts'
import Post from './Post'

export default function PostList({posts, remove}) {
  if (posts.length === 0) {
    return <NoPosts />
  }

  return (
    <div className='postList'>
      <h1 style={{marginTop: '10px'}}>Список постов</h1>
      {posts.map((post, i) =>
        <Post remove={remove} post={post} key={post.id} />
      )}
    
    </div>
  )
}
