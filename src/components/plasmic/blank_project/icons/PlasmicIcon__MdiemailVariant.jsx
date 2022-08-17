// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MdiemailVariantIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
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
          "M15 16.25L2.5 8.45V7.5A2.49 2.49 0 015 5h20a2.5 2.5 0 012.5 2.5v.938L15 16.25zm12.5 6.25A2.5 2.5 0 0125 25H5a2.5 2.5 0 01-2.5-2.5V11.387L5 12.95v9.55h20v-9.55l2.5-1.563V22.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MdiemailVariantIcon;
/* prettier-ignore-end */
