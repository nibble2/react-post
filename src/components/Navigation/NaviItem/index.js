import React from "react";
import toggle from "../../../hocs/toggle";

const NaviItem = ({ to, text, action }) => {
  const onClickAnchor = e => {
    if (action) {
      e.preventDefault(); //최상단으로 가는것을 방지
      e.stopPropagation(); //부모컴포넌트 이벤트 중지
      action();
    }
  };

  return (
    <li className="nav-item">
      <a href={to} onClick={onClickAnchor} className="nav-link">
        {text}
      </a>
    </li>
  );
};

export default toggle(NaviItem);
