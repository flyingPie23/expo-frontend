import '../assests/application.scss';
import React from 'react';

import {SignInForm} from '../components/Forms.tsx';

const inputform = {
  signin: [
    {lable: "email"},
    {lable: "password" }
  ]
}
class LoginPage extends React.Component {
  public render() {
    const {signin} = inputform
    return (
      <div id="auth-page">
        <SignInForm signin={signin} />
      </div>
    );
  }
}

export default LoginPage;
