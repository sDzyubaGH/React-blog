import React from 'react'
import Post from './Post'

export default function PostList({posts}) {
  return (
    <div className='postList'>
      <h1 style={{marginTop: '10px'}}>Список постов</h1>
      {posts.map((post, i) =>
        <Post post={post} key={post.id} />
      )}

    </div>
  )
}
