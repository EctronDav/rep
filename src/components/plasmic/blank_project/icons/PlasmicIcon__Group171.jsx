// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group171Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 227 236"}
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
          "M212.562 235.113H14.438C6.468 235.113 0 228.652 0 220.675V14.438C0 6.468 6.46 0 14.438 0h198.124C220.533 0 227 6.46 227 14.438v206.237c-.006 7.971-6.467 14.438-14.438 14.438z"
        }
        fill={"currentColor"}
        opacity={".51"}
      ></path>
    </svg>
  );
}

export default Group171Icon;
/* prettier-ignore-end */
