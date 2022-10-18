import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../../API/PostServise'
// import '../../styles/Post.css'
import '../../styles/PostPage.css'
import { useFetching } from '../hooks/useFetching'
import Loader from '../UI/Loader/Loader'

export default function PostPage() {
  const [postData, setPostData] = useState({ title: '', body: '' })
  const [comments, setComments] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  const params = useParams()
  const postId = params.id

  const [fetchPost, isPostLoading, postError] = useFetching(async () => {
    const postDataReq = await PostService.getOne(postId)
    setPostData({
      title: postDataReq.data.title,
      body: postDataReq.data.body
    })
  })

  const [fetchComments, isCommentLoading, commentsError] = useFetching(async () => {
    const postCommReq = await PostService.getComments(postId)
    setComments(postCommReq.data)
  })

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [])

  return (
    <div className='container' >
      {
        isPostLoading
          ? <Loader />
          : <div className='post'>
            <div className='curr__title'>
              <h2>{postData.title}</h2>
            </div>
            <div className='post__content'>
              {postData.body}
            </div>
          </div >
      }
      {
        isCommentLoading
          ? <Loader />
          : <div className="comments">
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
      }
    </div >
  )
}
