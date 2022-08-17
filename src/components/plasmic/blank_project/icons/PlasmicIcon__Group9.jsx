// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 52"}
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
          "M29.581 6c-9.283 0-16.858 7.359-16.858 16.426v11.065c0 5.164-4.138 9.374-9.248 9.374H2a9.64 9.64 0 011.223 4.678c0 .953-.143 1.853-.395 2.735h.647c9.266 0 16.787-7.485 16.858-16.679V22.426c0-4.965 4.139-9.013 9.248-9.013h4.048a11.336 11.336 0 01-.575-3.599c0-1.331.233-2.609.665-3.814h-4.138z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.799"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
