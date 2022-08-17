// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector19Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 27"}
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
          "M2.426 26.664c5.453 0 9.89-4.433 9.89-9.886v-6.666c0-3.111 2.43-5.646 5.421-5.646h.863A5.889 5.889 0 0118.12 0h-.383c-5.428 0-9.85 4.502-9.886 10.043 0 .013-.004.025-.004.033v6.694a5.432 5.432 0 01-5.425 5.425H.052A7.019 7.019 0 010 26.66h2.426v.004z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
