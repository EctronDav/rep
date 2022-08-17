// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group168Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1032 753"}
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

      <g opacity={".96"}>
        <path
          opacity={".84"}
          d={
            "M998.936 752.672H32.846C14.706 752.672 0 737.966 0 719.826V32.846C0 14.706 14.705 0 32.846 0h966.09c18.144 0 32.844 14.705 32.844 32.846v686.983c0 18.141-14.71 32.843-32.844 32.843z"
          }
          fill={"currentColor"}
        ></path>
      </g>
    </svg>
  );
}

export default Group168Icon;
/* prettier-ignore-end */
