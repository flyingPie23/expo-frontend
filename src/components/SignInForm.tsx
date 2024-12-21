import "../assests/application.scss"
import React from "react";

const SignInForm = (props:{ signup:  Array<{ lable: string}>;}) => {
  const {signup} = props

  const InputFormField: any = () => signup.map((inputLable: {lable: string}) =>
    <div className="form-control">
      <br />
      <input  type={inputLable.lable} id={inputLable.lable} name={inputLable.lable} className="form-input-field" placeholder={inputLable.lable} onFocus={(e) => e.target.classList.add('input-focused')} onBlur={(e) => e.target.classList.remove('input-focused')} />
    </div>

  )
  return (
    <div id="signin-form">
      <h1>Sign In</h1>
      <p>enter your email & password</p>
      <div className="form-container">
        <form>
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

export default SignInForm
