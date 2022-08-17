// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group172Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 169 175"}
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
        d={"M56.701 0H0v58.723h56.701V0zm-9.22 49.178H9.22V9.552h38.26v39.626z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M39.412 17.904H17.29v22.92h22.123v-22.92zM111.925 0v58.723h56.702V0h-56.702zm47.48 49.178h-38.258V9.552h38.258v39.626z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M153.126 17.904h-22.123v22.92h22.123v-22.92zM0 174.647h56.701v-58.723H0v58.723zm9.221-49.172h38.26v39.627H9.22v-39.627z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M39.412 133.828H17.29v22.921h22.123v-22.921z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group172Icon;
/* prettier-ignore-end */
