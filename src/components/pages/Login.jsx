import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import '../../styles/LoginPage.css'

export default function Login() {
  return (
    <div className='login-page'>
      <h1 className='login-page__title'>Login page</h1>
      <form className='login-page__form' action="">
        <MyInput type="text" placeholder='email...' />
        <MyInput type="password" placeholder='password...' />
        <MyButton className="login-page__btn">Login</MyButton>  
      </form>
    </div>
  )
}
