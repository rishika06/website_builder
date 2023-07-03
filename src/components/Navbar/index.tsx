import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.style.css";

type NavBarProps = {
  navLinkList: [];
  logoImage: string;
};

function NavBar({ navLinkList, logoImage }: NavBarProps) {
  return (
    <nav aria-labelledby="mainmenulabel">
      <div className="nav-bar__image">
        <img src={logoImage} height="100%" alt="logo" />
      </div>

      <ul role="menubar" aria-label="header" id="appmenu">
        {navLinkList?.length > 0 &&
          navLinkList?.map((item: any) => (
            <li role="menuitem" key={item?.id}>
              <NavLink to={item?.route}>{item?.navLink}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default NavBar;
