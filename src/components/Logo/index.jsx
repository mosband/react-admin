import React from "react";
import style from "./index.module.less";
export default function Logo(props) {
  const size = props.size || 33;
  const borderWidth = Math.max(1, ~~(size / 33));
  const className = React.$classNames(style.logo, props.className);
  return (
    <span
      className={className}
      style={{
        width: size + "px",
        height: size + "px",
        borderWidth: borderWidth + "px"
      }}
    ></span>
  );
}
