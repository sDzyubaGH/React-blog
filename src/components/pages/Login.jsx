import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

export default function Login() {
  return (
    <div>
      <h1>Login page</h1>
      <form action="">
        <MyInput type="text" placeholder='login...' />
        <MyInput type="password" placeholder='password...' />
        <MyButton>Login</MyButton>  
      </form>
    </div>
  )
}
