import "../assests/application.scss"
import React from "react";

import { logout } from "../scripts/authHandler.tsx"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMagnifyingGlass, faBell, faUser, faGear} from '@fortawesome/free-solid-svg-icons'




const SideBar = (props: { brand: {name: string, to: string, class: string}; tabs:Array<{ id: number, name: string, to: string, class: string}>; logoff:{name: string, class: string} }) => {
  const {brand, tabs, logoff} = props
  const icons = [faHome, faMagnifyingGlass, faBell, faUser, faGear]
  const BrandLink: any = () => <a href={brand.to} className={brand.class}> {brand.name} </a>
  const TabLink: any = () => tabs.map((tab:{id: number, name: string, to: string, class: string}) => <li> <a key={tab.name} href={tab.to} className={tab.class}> <FontAwesomeIcon icon={icons[tab.id]} /> {tab.name} </a> </li> )
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



      </div>

      <div className="footer">
        <LogoutLink/>

      </div>

    </div>
  )
}

export default SideBar
