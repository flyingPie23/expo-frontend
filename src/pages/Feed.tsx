import '../assests/application.scss';
import React from 'react';
import Sidebar from "../components/Sidebar.tsx"

const navigation = {
  brand: {name: "Ex-po", to: "/", class:"home-btn"},
  tabs: [
    {name: "Search", to: "/search", class:"search-btn"},
    {name: "notifications", to: "/notifications", class:"notifications-btn"},
    {name: "profile", to: "/profile", class:"profile-btn"},
    {name: "settings", to: "/settings", class:"settings-btn"},
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
