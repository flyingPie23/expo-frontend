import '../assests/application.scss';
import React from 'react';

import SignInForm from '../components/SignInForm.tsx';

const inputform = {
  signup: [
    {lable: "email"},
    {lable: "password" }
  ]


}
class LoginPage extends React.Component {
  public render() {
    const {signup} = inputform
    return (
      <div id="login-page">
        <SignInForm signup={signup} />
      </div>
    );
  }
}

export default LoginPage;
