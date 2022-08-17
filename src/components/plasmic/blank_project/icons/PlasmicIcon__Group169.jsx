// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group169Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 35"}
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
          "M28.188 13.905c2.6 1.556 2.6 5.442 0 6.993l-11.169 6.677L5.85 34.252C3.25 35.808 0 33.865 0 30.753V4.044c0-3.106 3.25-5.05 5.85-3.5l11.17 6.678 11.168 6.683z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group169Icon;
/* prettier-ignore-end */
