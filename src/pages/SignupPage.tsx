import '../assests/application.scss';
import React from 'react';

import {SignUpForm} from '../components/Forms.tsx';

const inputform = {
  signup:[
    {lable: "email"},
    {lable: "password" },
    {lable: "password confirmation"},
  ]
}

class SignupPage extends React.Component{

  public render() {
    const {signup} = inputform
    return (
      <div id="auth-page">
        <SignUpForm signup={signup} />
      </div>
    );

  }
}

export default SignupPage
