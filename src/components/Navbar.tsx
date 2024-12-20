import "../assests/application.scss"
import React from "react";

const Navbar = (props: { brand: { name: string, to: string }; linksRight:  Array<{ name: string; to: string }>; linksLeft:  Array<{ name: string; to: string }> }) => {
  const { brand, linksRight,linksLeft  } = props
  const NavLinksRight: any = () => linksRight.map((link: { name: string, to: string }) => <li><a className="nav-item nav-btn" key={link.name} href={link.to}>{link.name}</a></li>);
  const NavLinksLeft: any = () => linksLeft.map((link: { name: string, to: string }) => <li><a className="nav-item nav-link " key={link.name} href={link.to}>{link.name}</a></li>);

  return (
    <div id="nav-bar">

      <ul className="link-group">
        <NavLinksLeft />
      </ul>

      <a className="main-nav-item" href={brand.to}>{brand.name}</a>

      <ul className="link-group">
        <NavLinksRight />
      </ul>

    </div>
  )
}

export default Navbar
