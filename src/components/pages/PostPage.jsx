import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../../API/PostServise'
// import '../../styles/Post.css'
import '../../styles/PostPage.css'

export default function PostPage() {
  const [postData, setPostData] = useState({ title: '', body: '' })
  const [comments, setComments] = useState([])
  const params = useParams()
  const postId = params.id

  async function fetchPostInfo() {
    const postDataReq = await PostService.getOne(postId)
    setPostData({
      title: postDataReq.data.title,
      body: postDataReq.data.body
    })

    const postCommReq = await PostService.getComments(postId)
    setComments(postCommReq.data)
  }

  useEffect(() => {
    fetchPostInfo()
  }, [])

  return (
    <div className='container'>
      <div className='post'>
        <div className='curr__title'>
          <h2>{postData.title}</h2>
        </div>
        <div className='post__content'>
          {postData.body}
        </div>
      </div>
      <div className="comments">
        {
          comments.map((comment) => {
            return <div key={comment.id} className='comment'>
              <div className='comment__pers-info'>
                <h3>
                  {comment.name} ({comment.email})
                </h3>
              </div>
              <div className="comment__content">
                {comment.body}
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
