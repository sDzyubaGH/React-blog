import React from 'react'
import Post from './Post'

export default function PostList({posts, remove}) {
  return (
    <div className='postList'>
      <h1 style={{marginTop: '10px'}}>Список постов</h1>
      {posts.map((post, i) =>
        <Post remove={remove} post={post} key={post.id} />
      )}

    </div>
  )
}
