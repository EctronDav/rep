// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BxseditAltIcon(props) {
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
          "M18.667 2.347l3.5 3.5-2.669 2.67-3.5-3.5 2.669-2.67zm-14 13.986v3.5h3.5l9.682-9.668-3.5-3.5-9.682 9.668zm0 7h18.666v2.334H4.667v-2.334z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BxseditAltIcon;
/* prettier-ignore-end */
