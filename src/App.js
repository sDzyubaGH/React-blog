import React, { useState } from "react";
import './App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'Python', body: 'Description' },
    { id: 3, title: 'Java', body: 'Description' },
  ])

  return (
    <div className="App">
      <form className="postForm" action="">
        {/* <input type="text" name="" placeholder="Название поста" id="" />
        <input type="text" name="" placeholder="Описание поста" id="" /> */}
        <div className="postForm__inputs">
          <MyInput placeholder={'Название поста'} />
          <MyInput placeholder={'Описание поста'} />
        </div>
        <div className="postForm__btns">
          <MyButton>Создать</MyButton>
        </div>
      </form>

      <PostList posts={posts} />
    </div>
  );
}

export default App;
