import "../assests/application.scss"
import React from "react";

import { login, signUp } from "../scripts/authHandler.tsx"

export const SignInForm = (props:{ signin:  Array<{ lable: string}>;}) => {
  const {signin } = props

  const InputFormField: any = () => signin.map((inputLable: {lable: string}) =>
    <div className="form-control">
      <br />
      <input  type={inputLable.lable} id={inputLable.lable} name={inputLable.lable} className="form-input-field" placeholder={inputLable.lable} onFocus={(e) => e.target.classList.add('input-focused')} onBlur={(e) => e.target.classList.remove('input-focused')} />
    </div>

  )

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {
      email: formData.get('email'),
      password: formData.get('password')
    };
    console.log(user);

    await login(user.email as string, user.password as string)

  }
  return (
    <div>

      <div className="form-container">
        <h1>Sign In</h1>
        <p>enter your email & password</p>
        <form onSubmit={handleLogin}>
          <InputFormField/>

          <br />
          <button type="submit" className="form-control-btn">Submit</button>

        </form>

        <br />
        <p>or</p>
        <p>New to Ex-po ? <a href="/signup">Create an account here</a></p>


      </div>
    </div>
  )

}

export const SignUpForm = (props:{ signup:  Array<{ lable: string, type: string}>;}) => {
  const {signup} = props

  const InputFormField: any = () => signup.map((inputLable: {lable: string, type: string}) =>
    <div className="form-control">
      <br />
      <input type={inputLable.type} id={inputLable.lable} name={inputLable.lable} className="form-input-field" placeholder={inputLable.lable} onFocus={(e) => e.target.classList.add('input-focused')} onBlur={(e) => e.target.classList.remove('input-focused')} />
    </div>

  )

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation')
    };
    console.log(user);

    await signUp(user.email as string, user.password as string, user.password_confirmation as string)

  }

  return (
    <div>

      <div className="form-container">
        <h1>Sign Up</h1>
        <p>choose your email & password</p>
        <form onSubmit={handleSignup}>
          <InputFormField/>

          <br />
          <button type="submit" className="form-control-btn">Submit</button>

        </form>

        <br />
        <p>or</p>
        <p>already a memeber ? <a href="/login">Sign in here</a></p>


      </div>
    </div>
  )
}
