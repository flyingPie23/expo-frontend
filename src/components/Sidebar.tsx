import "../assests/application.scss"
import React from "react";

import { logout } from "../scripts/authHandler.tsx"





const SideBar = (props: { brand: {name: string, to: string, class: string}; tabs:Array<{ name: string, to: string, class: string }>; logoff:{name: string, class: string} }) => {
  const {brand, tabs, logoff} = props
  const BrandLink: any = () => <a href={brand.to} className={brand.class}> {brand.name} </a>
  const TabLink: any = () => tabs.map((tab:{name: string, to: string, class: string}) => <li> <a key={tab.name} href={tab.to} className={tab.class}> {tab.name} </a> </li> )
  const LogoutLink: any = () => <a onClick={logout} className={logoff.class}> {logoff.name} </a>
  return(
    <div id="side-bar">
      <div className="header">
        <BrandLink />
        <hr />
      </div>

      <div className="body">
        <ul>
          <TabLink />
        </ul>

        <hr />

      </div>

      <div className="footer">
        <LogoutLink/>

      </div>

    </div>
  )
}

export default SideBar
