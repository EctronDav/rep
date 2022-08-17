// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UilcommentVerifyIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 100"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M63.708 36.875l-19.709 19.75-7.708-7.75a4.184 4.184 0 00-5.917 5.917l10.667 10.666a4.167 4.167 0 005.917 0l22.666-22.666a4.184 4.184 0 00-5.916-5.917zM49.999 8.333A41.666 41.666 0 008.333 50a41.208 41.208 0 009.416 26.375l-8.333 8.333a4.167 4.167 0 00-.875 4.542 4.167 4.167 0 003.958 2.417H50a41.667 41.667 0 000-83.334zm0 75H22.541l3.875-3.875a4.167 4.167 0 000-5.875 33.334 33.334 0 1123.583 9.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UilcommentVerifyIcon;
/* prettier-ignore-end */
