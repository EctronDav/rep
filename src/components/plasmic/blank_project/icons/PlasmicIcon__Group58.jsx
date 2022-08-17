// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group58Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 47"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.066 45.673c9.14 0 16.57-7.43 16.57-16.57V17.948c0-5.217 4.067-9.463 9.086-9.463h1.457a9.988 9.988 0 01-1.205-4.732c0-.954.144-1.871.396-2.753h-.648c-9.104 0-16.516 7.557-16.57 16.84v11.263c0 5.002-4.066 9.086-9.086 9.086H2.09c.378 1.151.558 2.357.558 3.634 0 1.35-.234 2.645-.648 3.868l4.066-.018z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.799"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group58Icon;
/* prettier-ignore-end */