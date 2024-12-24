import '../assests/application.scss';
import React from 'react';
import { logout } from "../scripts/authHandler.tsx"



class Feed extends React.Component {
  public render() {
    return (
      <div id="landing-page">
        <h1 onClick={logout}>you are logged in</h1>
      </div>
    );
  }
}

export default Feed;
