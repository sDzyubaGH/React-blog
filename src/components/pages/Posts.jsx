import React, { useState } from "react";
import { useEffect } from "react";
import PostService from "../../API/PostServise";
import '../../App.css'
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import PostFilter from "../PostFilter";
import PostForm from "../PostForm";
import PostList from "../PostList";
import MyButton from "../UI/button/MyButton";
import Loader from "../UI/Loader/Loader";
import MyModal from "../UI/MyModal/MyModal";
import Pagination from "../UI/pagination/Pagination";
import getPageCount from "../../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPageCount, setTotalPageCount] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  // const [pagesArray, setPagesArray] = useState([])

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)

    console.log('FETCHING!!!')

    const pageCount = response.headers['x-total-count']
    setTotalPageCount(getPageCount(pageCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (post) => {
    setPosts([...posts, post])
    setModal(false)
  }

  const deletePost = (post) => {
    setPosts([...posts].filter(el => post.id !== el.id))
  }

  function changePage(pageNum) {
    setPage(pageNum)
  }

  return (
    <div className="container">
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm
          create={createPost}
        />
      </MyModal>
      <MyButton style={{ marginTop: 20 }}
        onClick={() => { setModal(true) }}
      >
        Создать пост...
      </MyButton>
      <hr style={{ margin: '20px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {
        isPostsLoading
          ? <Loader />
          : <PostList remove={deletePost} posts={sortedAndSearchedPosts} />
      }
      {
        sortedAndSearchedPosts.length
          ? <Pagination
            page={page}
            totalPageCount={totalPageCount}
            changePage={changePage} />
          : <></>
      }
    </div>
  );
}

export default Posts;
