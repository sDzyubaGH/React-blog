import React, { useState } from "react";
import { useEffect } from "react";
import PostService from "./API/PostServise";
import './App.css'
import { useFetching } from "./components/hooks/useFetching";
import { usePosts } from "./components/hooks/usePosts";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/Loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'b' },
    { id: 2, title: 'Python', body: 'a' },
    { id: 3, title: 'Java', body: 'c' },
  ])
  const [filter, setFilter] = useState({ searchQuery: '', selectedSort: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.selectedSort, filter.searchQuery)
  const [fetchPosts, isPostsLoading, fetchPostsError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: '10px' }}
        onClick={() => setModal(true)}
      >
        Создать пост...
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '10px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {
        fetchPostsError
        && <h1>Произошла ошибка</h1>
      }
      {
        isPostsLoading
          ? <Loader />
          : <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      }


    </div>
  );
}

export default App;
