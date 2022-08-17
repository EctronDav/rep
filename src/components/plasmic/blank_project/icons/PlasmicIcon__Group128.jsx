// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group128Icon(props) {
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
          "M29.581 1c-9.284 0-16.858 7.359-16.858 16.426v11.065c0 5.164-4.138 9.374-9.248 9.374H2a9.64 9.64 0 011.224 4.678c0 .953-.145 1.853-.396 2.735h.647c9.266 0 16.787-7.485 16.859-16.679V17.426c0-4.965 4.137-9.013 9.247-9.013h4.048a11.334 11.334 0 01-.575-3.599c0-1.331.233-2.609.665-3.814h-4.138v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.799"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group128Icon;
/* prettier-ignore-end */
