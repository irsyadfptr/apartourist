import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = (props) => {
  const { type, onClick, href, isDisabled, isExternal, children, isPrimary, isLight, isLarge, isSmall, isBlock, hasShadow, style } = props;
  //Make props isPrimary, isLight, isLarge, isSmall, isBlock, hasShadow

  const className = [props.className];
  if (isPrimary) className.push("btn-primary");
  if (isLight) className.push("btn-light");
  if (isLarge) className.push("btn-lg");
  if (isSmall) className.push("btn-sm");
  if (isBlock) className.push("btn-block");
  if (hasShadow) className.push("btn-shadow");

  const onClicked = () => {
    if (onClick) onClick();
  };

  if (type === "link") {
    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link to={href} className={className} style={style}>
          {children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      onClick={onClicked}
      disabled={isDisabled}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  isDisabled: propTypes.bool,
  isExternal: propTypes.bool,
  isPrimary: propTypes.bool,
  isLight: propTypes.bool,
  isLarge: propTypes.bool,
  isSmall: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};

export default Button;
