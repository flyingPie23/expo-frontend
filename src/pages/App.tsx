import '../assests/application.scss';
import React from 'react';

import Navbar from '../components/Navbar.tsx';

const navigation = {
  brand: { name: "Ex-Po", to: "/" },

  linksRight: [
    { name: "login", to: "/login" },
    { name: "Get Started", to: "/signup" },
  ],

  linksLeft: [
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" },
  ]
}

class App extends React.Component {
  public render() {
    const { brand, linksRight, linksLeft } = navigation;
    return (
      <div id="landing-page">
        <Navbar brand={brand} linksRight={linksRight} linksLeft={linksLeft}/>
      </div>
    );
  }
}

export default App;
