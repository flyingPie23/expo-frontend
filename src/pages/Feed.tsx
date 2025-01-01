import '../assests/application.scss';
import React from 'react';
import Sidebar from "../components/Sidebar.tsx"

const navigation = {
  brand: {name: "Ex-po", to: "/", class:"home-btn"},
  tabs: [
    {name: "home", to: "/", class:"tab-btn"},
    {name: "search", to: "/search", class:"tab-btn"},
    {name: "notifications", to: "/notifications", class:"tab-btn"},
    {name: "profile", to: "/profile", class:"tab-btn"},
    {name: "settings", to: "/settings", class:"tab-btn"},
  ],
  logoff:{name: "logout", class:"logout-btn"}
}

class Feed extends React.Component {
  public render() {
    const {brand, tabs, logoff} = navigation
    return (
      <div id="landing-page">
        <Sidebar brand={brand} tabs={tabs} logoff={logoff}  />
      </div>
    );
  }
}

export default Feed;
