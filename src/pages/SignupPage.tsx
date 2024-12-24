import '../assests/application.scss';
import React from 'react';

import {SignUpForm} from '../components/Forms.tsx';

const inputform = {
  signup:[
    {lable: "email", type: "email"},
    {lable: "password", type: "password" },
    {lable: "password confirmation", type: "password"},
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
