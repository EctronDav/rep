// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector21Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 19"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.972 0h-3.393C5.63 0 0 5.284 0 11.797v.963a4.113 4.113 0 004.115 4.11h.342L6.4 18.963v-2.091h18.044a4.113 4.113 0 004.11-4.111v-.963C28.552 5.28 22.92 0 15.973 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector21Icon;
/* prettier-ignore-end */
