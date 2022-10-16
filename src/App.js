import React, { useState } from "react";
import { useEffect } from "react";
import PostService from "./API/PostServise";
import './App.css'
import { useFetching } from "./components/hooks/useFetching";
import { usePagination } from "./components/hooks/usePagination";
import { usePosts } from "./components/hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/Loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import getPageCount from "./utils/pages";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPageCount, setTotalPageCount] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  // const [pagesArray, setPagesArray] = useState([])
  const pagesArray = usePagination(totalPageCount)
  console.log(pagesArray)

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

  // useMemo(() => {
  //   for (let i = 0; i < totalPageCount; i++) {
  //     pagesArray.push(i + 1)
  //   }
  // }, [totalPageCount])

  function changePage(pageNum) {
    setPage(pageNum)
  }

  return (
    <div className="App">
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
      <div className="pagination-btns">
        {pagesArray.map((pageNum) => {
          const btnClassName = pageNum === page ? 'current-page' : ''
          return <MyButton onClick={(e) => changePage(pageNum)} className={pageNum === page ? 'current-page' : ''} key={pageNum}>{pageNum}</MyButton>
        }
        )}
      </div>
    </div>
  );
}

export default App;
