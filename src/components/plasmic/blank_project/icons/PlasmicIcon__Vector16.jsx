// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector16Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 89 72"}
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
          "M75.052 0h-.794c.194.684.31 1.4.31 2.146a7.7 7.7 0 01-.931 3.682h1.415c4.066 0 7.37 3.177 7.37 7.08v9.169c0 4.06-3.172 7.37-7.08 7.37h-.49l-3.83 3.834v-3.835h-9.83c-7.117 0-12.904 5.918-12.904 13.198v16.044c0 3.903-3.172 7.08-7.075 7.08H18.584v4.55l-4.218-4.55h-1.463c-3.903 0-7.075-3.177-7.075-7.08V41.876c0-3.903 3.177-7.08 7.075-7.08h5.392a9.16 9.16 0 01-.069-5.828h-5.323C5.786 28.968 0 34.754 0 41.87v16.811C0 65.8 5.791 71.586 12.903 71.586H41.22c7.117 0 12.903-5.787 12.903-12.904V42.64c0-4.066 3.177-7.37 7.075-7.37h14.15c7.117 0 12.903-5.922 12.903-13.197v-9.169C88.25 5.791 82.327 0 75.052 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
