import React, { MouseEventHandler } from "react";

import { sideNavList } from "../../../../../constants/navList";

type SideBarProps = {
  handleClick: MouseEventHandler<HTMLUListElement>;
  formSection: string;
};

function SideBar({ handleClick, formSection }: SideBarProps) {
  return (
    <ul onClick={handleClick}>
      {sideNavList?.map((item: any) => (
        <li
          key={item.id}
          className={
            formSection === item?.title ? "website-form__side-list-active" : ""
          }
        >
          {item?.title}
        </li>
      ))}
    </ul>
  );
}

export default SideBar;
