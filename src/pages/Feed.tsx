import '../assests/application.scss';
import React, { Component } from 'react';
import Sidebar from "../components/Sidebar.tsx"

const navigation = {
  brand: {name: "Ex-po", to: "/", class:"home-btn"},
  tabs: [
    {id: 0, name: "home", to: "/", class:"tab-btn"},
    {id: 1, name: "search", to: "/search", class:"tab-btn"},
    {id: 2, name: "notifications", to: "/notifications", class:"tab-btn"},
    {id: 3, name: "profile", to: "/profile", class:"tab-btn"},
    {id: 4, name: "settings", to: "/settings", class:"tab-btn"},
  ],
  logoff:{name: "logout", class:"logout-btn"}
}

interface Feedtab {
  discover: boolean,
  following: boolean
}

class Feed extends Component<{}, Feedtab> {
  state: Feedtab = {
    discover: true,
    following: false
  }

  active = (event) => {
    console.log(event.currentTarget.textContent);

    if (event.currentTarget.textContent === 'Discover') {
      this.setState({ discover: true, following: false });

    } else if (event.currentTarget.textContent === 'Following') {
      this.setState({ discover: false, following: true });
    }
  }

  public render() {
    const {brand, tabs, logoff} = navigation;
    return (
      <div id="feed-page">
        <Sidebar brand={brand} tabs={tabs} logoff={logoff} />

        <div className='feed-scroll'>
          <div className="feed-header">
            <h1 onClick={this.active} className={`feed-tab ${this.state.discover ? 'active' : ''}`}>Discover</h1>
            <h1 onClick={this.active} className={`feed-tab ${this.state.following ? 'active' : ''}`}>Following</h1>
          </div>

          <div className="feed-results">
            <div className="feed-content">
              {this.state.discover ? (
                Array.from({ length: 100 }).map((_, index) => (
                <div key={index}>
                  <h1>Discover</h1>
                  <p>feed time</p>
                </div>
                ))
              ) : (
                Array.from({ length: 100 }).map((_, index) => (
                <div key={index}>
                  <h1>Following</h1>
                  <p>feed time</p>
                </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Feed;
