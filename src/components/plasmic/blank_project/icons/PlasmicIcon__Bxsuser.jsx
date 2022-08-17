// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BxsuserIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
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
          "M8.75 7.583a5.256 5.256 0 005.25 5.25 5.256 5.256 0 005.25-5.25A5.256 5.256 0 0014 2.333a5.256 5.256 0 00-5.25 5.25zM23.333 24.5H24.5v-1.167c0-4.502-3.665-8.166-8.167-8.166h-4.666c-4.504 0-8.167 3.664-8.167 8.166V24.5h19.833z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BxsuserIcon;
/* prettier-ignore-end */
